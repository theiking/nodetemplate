import merchantController from "../controller/merchant.controller";
import { Router } from "express";
import Cache from "../middlewares/cache.middleware";

export class MerchantRouter {
    private router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get("/:id", Cache.getById , merchantController.getMerchant);
        this.router.get("/", Cache.getAll, merchantController.allMerchants);
        this.router.post("/", merchantController.addMerchant);
        this.router.delete("/:id", merchantController.deleteMerchant);
        this.router.put("/:id", merchantController.updateMerchant);
    }

    getRouter(): Router {
        return this.router;
    }
}

export default new MerchantRouter().getRouter();