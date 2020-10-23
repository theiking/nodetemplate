import { Application, Request, Response } from "express";
import { UserController } from "../controllers/userController";
import * as cors from "cors";
import { Authentication } from "../modules/common/authentication";

import {
  test_message,
  wrong_email,
  success_req,
} from "../modules/common/message";

export class UserRoutes {
  private user_controller: UserController = new UserController();
  private keyAuthen: String = "88506c8c871de56b0eeb52c1a453b5ef941155f0";
  private authen: Authentication = new Authentication();

  public route(app: Application) {
    //==========    API Test    ================
    app.use("/api/testuse", (req: Request, res: Response) => {
      // use for get/put/post/delete
      res.status(200).json({ message: test_message });
    });

    app.get("/api/test", cors(), (req: Request, res: Response) => {
      res.status(200).json({ message: success_req });
    });

    app.post("/api/test", (req: Request, res: Response) => {
      res.status(200).json({ message: "Post request successfull" });
    });

    // =============    API user    ==============

    app.post("/api/user", (req: Request, res: Response) => {
      /*
      if (req.query.key !== this.keyAuthen) {unautorized(res);} 
      else { this.user_controller.create_user(req, res);}
      */
      this.authen.authenKey(req, res, () => {
        this.user_controller.create_user(req, res);
      });
    });

    app.get("/api/user/:id", (req: Request, res: Response) => {
      this.authen.authenKey(req, res, () => {
        this.user_controller.get_user(req, res);
      });
    });

    app.put("/api/user/:id", (req: Request, res: Response) => {
      this.authen.authenKey(req, res, () => {
        this.user_controller.update_user(req, res);
      });
    });

    app.delete("/api/user/:id", (req: Request, res: Response) => {
      this.authen.authenKey(req, res, () => {
        this.user_controller.delete_user(req, res);
      });
    });
  }
}
