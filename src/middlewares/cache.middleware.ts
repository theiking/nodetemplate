import * as redis from "redis";
import { Request, Response, NextFunction } from "express";

const PORT_REDIS =  + process.env.PORT_REDIS || 6379;
const redisClient = redis.createClient(PORT_REDIS);


class Cache {

    getAllUsers(req: Request, res: Response, next: NextFunction) {
        
        redisClient.get('getallusers',(err,data)=> {
            if(err) res.status(400).send("ERROR");
            if(data) res.status(200).json(JSON.parse(data));
            else next();
        })
    }

    getUserById(req: Request, res: Response, next: NextFunction) {

        redisClient.get('getallusers',(err,data)=> {

            if(err) res.status(400).send("ERROR");
            if(!data) return next();

            let users: any[] = JSON.parse(data);
            let user = users.find(u => u._id === req.params.id);

            if(user) res.status(200).json(user);
            else next();

        })
    }

    allOrders =  (req: Request, res: Response, next: NextFunction) => {
        redisClient.get('allOders', (err,data)=> {

            if(err) res.status(400).send("ERROR");

            if(data) res.status(200).json(JSON.parse(data));
            else next();
        })
    }

    getOrderById = (req: Request, res: Response, next: NextFunction) => {
        redisClient.get('getallusers',(err,data)=> {
            
            if(err) res.status(400).send("ERROR");
            if(!data) return next();

            let orders: any[] = JSON.parse(data);
            let order = orders.find(u => u._id === req.params.id);

            if(order) res.status(200).json(order);
            else next();

        })
    }

}

export default new Cache();