import userController from "../controller/user.controller";
import { Router} from "express";
import Cache from "../middlewares/cache.middleware";

export class UserRoute {
    private router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {        
        this.router.get("/:id", Cache.getUserById,userController.getUserById);
        this.router.get("/", Cache.getAllUsers,userController.allUsers);
        this.router.post("/",userController.addUser);
        this.router.delete("/:id",userController.deleteUser);
        this.router.put("/:id",userController.updateUser);
    }

    getRouter() {
        return this.router;
    }
}


export default new UserRoute().getRouter();