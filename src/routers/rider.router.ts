import riderController from "../controller/rider.controller";
import { Router } from "express";

export class RiderRouter {
    private router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get("/:id", riderController.getRider);
        this.router.get("/", riderController.allRiders);
        this.router.post("/", riderController.addRider);
        this.router.delete("/:id", riderController.deleteRider);
        this.router.put("/:id", riderController.updateRider);
    }

    getRouter(): Router {
        return this.router;
    }
}

export default new RiderRouter().getRouter();