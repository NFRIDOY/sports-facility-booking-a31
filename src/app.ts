import express, { NextFunction, Request, Response } from "express";
import { ProductRouters } from "./modules/products/product.route";
import { OrderRouters } from "./modules/orders/order.route";
import router from "./routes";
const app = express();
// import routes from "./routes"

//parsers
app.use(express.json());

// application routes
app.use('/api', router);



app.get("/", (req: Request, res: Response) => {
    res.send("Sports Facility Booking Platform Server is Running");
});

// "Not Found" middleware
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

// Error-handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Something went wrong!",
    });
});

export default app;
