import { Request, Response, NextFunction} from "express";
import OrderService from "../services/order.service";
import Order from "../models/Order";

import * as redis from "redis";

const PORT_REDIS = + process.env.PORT_REDIS || 6379;

const redisClient = redis.createClient(PORT_REDIS);

class OrderController {

    allOrders = (req: Request, res: Response, next: NextFunction) => {
        OrderService.getAll()
            .then(orders => {
                redisClient.set(req.baseUrl, JSON.stringify(orders));
                res.send(orders).status(200)
            })
            .catch((err)=> res.status(404).send(err));            
    }

    getOrder = (req: Request, res: Response, next: NextFunction) => {
        OrderService.getOne(req.params.id)
            .then(order => res.send(order).status(200))
            .catch(()=> res.status(404).send({
                "message": "Not found"
            }));
    }

    addOrder = (req: Request, res: Response, next: NextFunction) => {
        let order = new Order(req.body);
        OrderService.add(order)
            .then(() => {
              redisClient.del(req.baseUrl);
              res.status(201).send({"message": "Success"})
            })
            .catch((err) => res.status(500).send(err));
    }

    deleteOrder = (req: Request, res: Response, next: NextFunction) => {
        OrderService.deleteById( req.params.id )
            .then(() => {
                redisClient.del(req.baseUrl);
                res.status(200).send({"message": "Success"})
              })
            .catch((err) => res.status(500).send(err))
    }
    
    updateOrder = (req: Request, res: Response, next: NextFunction) => {
        OrderService.update( req.params.id , req.body)
            .then(order => {
                redisClient.del(req.baseUrl);
                res.status(200).send(order)
              })
            .catch((err) => res.status(500).send(err));
    }
    
}

export default new OrderController();