import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (payload: TOrder) => {
    const result = await Order.create(payload);
    return result;
};
const getAllOrder = async () => {
    const result = await Order.find();
    return result;
};
const getSearchOrderByEmail = async (email: string) => {
    // const regex = new RegExp(email, "i");
    // const result = await Order.find({ email: { $regex: regex } });
    const result = await Order.find({ email: email });
    return result;
};
// const getAllProducts = async () => {
//     const result = await Product.find();
//     return result;
// };
// const getProductById = async (id: string) => {
//     const result = await Product.findById(id);
//     return result;
// };
// const getSearchProducts = async (name: string) => {
//     const regex = new RegExp(name, "i"); // 'i' makes it case insensitive
//     const result = await Product.find({ name: { $regex: regex } });
//     return result;
// };
// const updateProductById = async (id: string, payload: TProduct) => {
//     const result = await Product.findByIdAndUpdate(id, payload, {
//         new: true, // Return the updated document
//         runValidators: true, // Validate the update operation
//     });
//     return result;
// };

// //5
// const deleteProductById = async (id: string) => {
//     const result = await Product.findByIdAndDelete(id);
//     return result;
// };

export const OrderServices = {
    createOrder,
    getAllOrder,
    getSearchOrderByEmail,
    // getAllProducts,
    // getProductById,
    // updateProductById,
    // deleteProductById,
    // getSearchProducts,
};
