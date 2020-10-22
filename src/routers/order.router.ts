import orderController from "../controller/order.controller";
import { Router } from "express";

export class RiderRouter {
    private router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get("/:id", orderController.getOrder);
        this.router.get("/", orderController.allOrders);
        this.router.post("/", orderController.addOrder);
        this.router.delete("/:id", orderController.deleteOrder);
        this.router.put("/:id", orderController.updateOrder);
    }

    getRouter(): Router {
        return this.router;
    }
}

export default new RiderRouter().getRouter();
