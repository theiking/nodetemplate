import userApi from "../controller/user.controller";
import { Router} from "express";
export class UserRoute {
    private router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        
        this.router.get("/:id",userApi.getUserById);
        this.router.get("/",userApi.allUsers);
        this.router.post("/",userApi.addUser);
        this.router.delete("/:id",userApi.deleteUser);
        this.router.put("/:id",userApi.updateUser);

    }

    getRouter() {
        return this.router;
    }
}

export default new UserRoute().getRouter();