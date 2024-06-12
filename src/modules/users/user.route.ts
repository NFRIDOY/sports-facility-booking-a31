import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.post("/auth/signup", UserController.createUser);

export const UserRoutes = router;
