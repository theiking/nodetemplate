import dishController from "../controller/dish.controller";
import { Router } from "express";

export class DishRouter {
    private router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get("/:id", dishController.getDish);
        this.router.get("/", dishController.allDishs);
        this.router.post("/", dishController.addDish);
        this.router.delete("/:id", dishController.deleteDish);
        this.router.put("/:id", dishController.updateDish);
    }

    getRouter(): Router {
        return this.router;
    }
}

export default new DishRouter().getRouter();
