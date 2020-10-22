import { Express } from "express";
import userRouter from "./user.router";
import authRouter from "./auth.router";
import merchantRouter from "./merchant.router";
import riderRouter from "./rider.router";
export class MainRouter {

    route(app: Express) {
        app.use('/api/auth', authRouter);
        app.use('/api/user', userRouter);
        app.use('/api/merchant', merchantRouter);
        app.use('/api/rider', riderRouter);
        
    }
}

export default new MainRouter().route;
