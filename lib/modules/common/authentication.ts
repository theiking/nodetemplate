import {Request, Response } from "express";
import { unautorized } from "./service";

export class Authentication {
  private keyAuthen: String = "88506c8c871de56b0eeb52c1a453b5ef941155f0";

  public authenKey(req: Request, res: Response,callback:any):void{
    if (req.query.key !== this.keyAuthen) {
      unautorized(res);
    } else {
      callback();
    }

  }
}
