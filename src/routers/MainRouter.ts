import { Express } from "express";
import userRouter from "./UserRouter";
import authRouter from "./AuthRouter";
import merchantRouter from "./MerchantRouter";

export class MainRouter {

    route(app: Express) {
        app.use('/api/auth', authRouter);
        app.use('/api/user', userRouter);
        app.use('/api/merchant', merchantRouter);
    }
}

export default new MainRouter().route;
