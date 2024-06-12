import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { ProductServices } from "../products/product.service";
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;
// import { z } from "zod";

// O1
const createOrder = async (req: Request, res: Response) => {
    try {
        // // Validate order using zod

        // const orderValidationSchema = z.object({
        //     email: z.string(),
        //     productId: z.string(),
        //     price: z.number(),
        //     quantity: z.number()
        // })

        const OrderData = req.body;

        // validate id

        function isValidObjectId(id: any) {
            return ObjectId.isValid(id) && String(new ObjectId(id)) === id;
        }

        if (!isValidObjectId(OrderData?.productId)) {
            return res.json({
                success: false,
                message: "productId is not valid!",
            });
        }
        // Find the product Stock

        const findProductStock = await ProductServices.getProductById(
            OrderData?.productId
        );

        // console.log("findProductStock ==1>", findProductStock);

        if (findProductStock) {
            // Update the product Quantity
            const updateProductStock =
                await ProductServices.updateStockByProductId(
                    OrderData?.productId,
                    OrderData?.quantity
                );

            // const updateProductQuantity = await ProductServices.updateProductById()

            // console.log("updateProductStock ==2>", updateProductStock);
            // if (!getProductStock) {
            if (!updateProductStock) {
                return res.json({
                    success: false,
                    message: "Insufficient quantity available in inventory",
                });
            }
            // else if (getProductStock?.length === 0) {
            //     return res.json({
            //         success: false,
            //         message: "Order not found",
            //     });
            // }

            // Create Order
            const result = await OrderServices.createOrder(OrderData);

            // console.log(result)
            if (!result) {
                return res.json({
                    success: false,
                    message: "Order is not created!",
                    data: result,
                });
            }
            // // data is sending as response from the database to the frontend.
            // // Here result is the inserted document
            res.json({
                success: true,
                message: "Order created successfully!",
                data: result,
            });
        } else {
            return res.json({
                success: false,
                message: "Order not found",
            });
        }
    } catch (error) {
        console.log("Error ==>", error);
    }
};
// O2
const getAllOrder = async (req: Request, res: Response) => {
    try {
        const search = req.query.email as string;
        // console.log(search);

        let result;
        if (search) {
            result = await OrderServices.getSearchOrderByEmail(search);
        } else {
            result = await OrderServices.getAllOrder();
        }
        // console.log(result);
        if (!result || result.length === 0) {
            return res.json({
                success: false,
                message: "Order not found",
                data: [],
            });
        }
        // // data is sending as response from the database to the frontend.
        // // Here result is the inserted document
        res.json({
            success: true,
            message: "Orders fetched successfully for user email!",
            data: result,
        });
    } catch (error) {
        console.log("Error ==>", error);
    }
};

export const OrderControllers = {
    createOrder,
    getAllOrder,
};
