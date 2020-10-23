import authController from "../controller/auth.controller";
import { Router } from "express";


export class AuthRouter {
    private router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.post("/signup", authController.signup);
        this.router.post("/signin", authController.signIn);
    }

    getRouter(): Router {
        return this.router;
    }

}

export default new AuthRouter().getRouter();