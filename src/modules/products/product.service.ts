import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: TProduct) => {
    const result = await Product.create(payload);
    return result;
};
const getAllProducts = async () => {
    const result = await Product.find();
    return result;
};
const getProductById = async (id: string) => {
    const result = await Product.findById(id);
    return result;
};
const getSearchProducts = async (name: string) => {
    const regex = new RegExp(name, "i"); // 'i' makes it case insensitive
    const result = await Product.find({ name: { $regex: regex } });
    return result;
};
const updateProductById = async (id: string, payload: TProduct) => {
    const result = await Product.findByIdAndUpdate(id, payload, {
        new: true, // Return the updated document
        runValidators: true, // Validate the update operation
    });
    return result;
};
const updateStockByProductId = async (id: string, quantity: number) => {
    // const result = await Product.findOneAndUpdate(id, {inventory.quantity : 10});
    const resultFind = await Product.findById(id);
    // console.log("resultFind =1>", resultFind);

    if (
        resultFind?.inventory?.inStock &&
        resultFind?.inventory?.quantity >= quantity
    ) {
        const newQuantity: number | undefined =
            resultFind?.inventory?.quantity - quantity;
        const newInStock: boolean | undefined = newQuantity <= 0 ? false : true;

        const resultUpdate = await Product.updateOne(
            { _id: id },
            {
                // $set: {
                inventory: {
                    quantity: newQuantity,
                    inStock: newInStock,
                },
                // }
            }
        );
        // console.log("resultUpdate =2>", resultUpdate);
        return resultUpdate;
    } else if (!resultFind?.inventory?.inStock) {
        console.log("Stock out");
        return null;
    }

    // const result = await Product.findById(id, {
    //     new: true, // Return the updated document
    //     runValidators: true, // Validate the update operation
    // });
    // result.inventory.quantity = quantity - 1;
    // const getInStock = result?.inventory?.inStock;
    // const getQuantity = result?.inventory?.quantity;

    // if (getInStock) {
    //     const newQuantity = getQuantity as number - quantity;
    // }
    // return result;
};

//5
const deleteProductById = async (id: string) => {
    const result = await Product.findByIdAndDelete(id);
    return result;
};

export const ProductServices = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
    getSearchProducts,
    updateStockByProductId,
};
