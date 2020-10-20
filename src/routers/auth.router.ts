import authApi from "../controller/auth.controller";
import { Router } from "express";


export class AuthRouter {
    private router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.post("/signup", authApi.signup);
        this.router.post("/signin", authApi.signIn);
    }

    getRouter(): Router {
        return this.router;
    }

}

export default new AuthRouter().getRouter();