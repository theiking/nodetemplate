import { Express } from "express";
import userRouter from "./user.router";
import authRouter from "./auth.router";
import merchantRouter from "./merchant.router";

export class MainRouter {

    route(app: Express) {
        app.use('/api/auth', authRouter);
        app.use('/api/user', userRouter);
        app.use('/api/merchant', merchantRouter);
    }
}

export default new MainRouter().route;
