import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.createUser(req.body);

        if (!result) {
            res.status(500).json({
                success: false,
                message: "User created faild!",
                data: result,
            });
        }

        res.status(200).json({
            success: true,
            message: "User created successfully!",
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};

export const UserController = {
    createUser
}
