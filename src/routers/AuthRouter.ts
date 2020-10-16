import authApi from "../api/AuthApi";
import { Router } from "express";


export class AuthRouter {
    private router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.post("/signin", authApi.signIn);
        this.router.post("/signup", authApi.signup);
    }

    getRouter(): Router {
        return this.router;
    }

}

export default new AuthRouter().getRouter();