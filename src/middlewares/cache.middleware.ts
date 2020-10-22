import * as redis from "redis";
import { Request, Response, NextFunction } from "express";

import {myCache} from "../controller/user.controller";

const PORT_REDIS =  + process.env.PORT_REDIS || 6379;
const redisClient = redis.createClient(PORT_REDIS);


class Cache{

    getAllUsers(req: Request, res: Response, next: NextFunction) {
        
        redisClient.get('getallusers',(err,data)=> {
            if(err) res.status(400).send("ERROR");
            if(data) res.status(200).json(JSON.parse(data));
            else next();
        })
    }
    getUserById(req: Request, res: Response, next: NextFunction) {
        const data = myCache.get('getuserbyid');
        if(data) {
            res.status(200).json(data);
        } else {
            next(); 
        }
    }
}

export default new Cache();