import merchantApi from "../controller/merchant.controller";
import { Router } from "express";

export class MerchantRouter {
    private router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get("/:id", merchantApi.getMerchant);
        this.router.get("/", merchantApi.allMerchants);
        this.router.post("/", merchantApi.addMerchant);
        this.router.delete("/:id", merchantApi.deleteMerchant);
        this.router.put("/:id", merchantApi.updateMerchant);
    }

    getRouter(): Router {
        return this.router;
    }
}

export default new MerchantRouter().getRouter();