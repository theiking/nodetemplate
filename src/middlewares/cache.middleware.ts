import * as redis from "redis";
import { Request, Response, NextFunction } from "express";

const PORT_REDIS =  + process.env.PORT_REDIS || 6379;
const redisClient = redis.createClient(PORT_REDIS);


class Cache {

    getAll(req: Request, res: Response, next: NextFunction) {

        redisClient.get(req.baseUrl,(err,data)=> {
            if(err) res.status(400).send("ERROR");
            if(data) {res.status(200).send(JSON.parse(data));}
            else next();
        })
    }

    getById(req: Request, res: Response, next: NextFunction) {

        redisClient.get(req.baseUrl,(err,data)=> {
            if(err) res.status(400).send("ERROR");
            if(!data) return next();

            let users: any[] = JSON.parse(data);
            let user = users.find(u => u._id === req.params.id);

            if(user) res.status(200).json(user);
            else next();

        })
    }

}

export default new Cache();