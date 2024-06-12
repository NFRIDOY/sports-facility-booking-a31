import { Router } from "express";
import { ProductRouters } from "../modules/products/product.route";
import { OrderRouters } from "../modules/orders/order.route";

const router = Router();

const moduleRoutes = [
    // {
    //     path: "/users",
    //     route: UserRoutes,
    // },
    {
        path: "/products",
        route: ProductRouters,
    },
    {
        path: "/orders",
        route: OrderRouters,
    },
];
// app.use("/api/products", ProductRouters);
// app.use("/api/orders", OrderRouters);
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
