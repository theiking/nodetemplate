import merchantController from "../controller/merchant.controller";
import { Router } from "express";

export class MerchantRouter {
    private router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get("/:id", merchantController.getMerchant);
        this.router.get("/", merchantController.allMerchants);
        this.router.post("/", merchantController.addMerchant);
        this.router.delete("/:id", merchantController.deleteMerchant);
        this.router.put("/:id", merchantController.updateMerchant);
    }

    getRouter(): Router {
        return this.router;
    }
}

export default new MerchantRouter().getRouter();