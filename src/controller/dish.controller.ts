import { Request, Response, NextFunction } from "express";
import DishService from "../services/dish.service";
import Dish from "../models/Dish";

import * as redis from "redis";

const PORT_REDIS = + process.env.PORT_REDIS || 6379;
const redisClient = redis.createClient(PORT_REDIS);

class DishController {

    allDishs = (req: Request, res: Response, next: NextFunction) => {
        DishService.getAll()
            .then(dishs => {
                redisClient.set(req.baseUrl, JSON.stringify(dishs));
                res.send(dishs).status(200)
            })
            .catch((err) => res.status(404).send(err));
    }

    getDish = (req: Request, res: Response, next: NextFunction) => {
        DishService.getOne(req.params.id)
            .then(dish => res.send(dish).status(200))
            .catch(() => res.status(404).json({
                message: "Not found"
            }));
    }

    addDish = (req: Request, res: Response, next: NextFunction) => {
        let dish = new Dish(req.body);
        DishService.add(dish)
            .then(() => {
                redisClient.del(req.baseUrl);
                res.status(201).json(dish)
            })
            .catch((err) => res.status(500).send(err));
    }

    deleteDish = (req: Request, res: Response, next: NextFunction) => {
        DishService.deleteById(req.params.id)
            .then(() => {
                redisClient.del(req.baseUrl);
                res.status(200).json({ message: "Success" })
            })
            .catch((err) => res.status(500).json(err))
    }

    updateDish = (req: Request, res: Response, next: NextFunction) => {
        DishService.update(req.params.id, req.body)
            .then(dish => {
                redisClient.del(req.baseUrl);
                res.send(dish).status(200)
            })
            .catch((err) => res.status(500).send(err));
    }


}

export default new DishController();