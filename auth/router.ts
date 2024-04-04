import { Router } from "express";
export const authRouter = Router();
authRouter.get("/", require("./user"));

