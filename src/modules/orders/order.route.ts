import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

router.post("/", OrderControllers.createOrder);
router.get("/", OrderControllers.getAllOrder);

// router.get("/:productId", OrderControllers.getProductById);
// router.put("/:productId", OrderControllers.updateProductById);
// router.delete("/:productId", OrderControllers.deleteProductById);



export const OrderRouters = router;
