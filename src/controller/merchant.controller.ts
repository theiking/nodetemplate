import { Request, Response, NextFunction } from "express";
import Merchant from "../models/Merchant";
import MerchantService from "../services/merchant.service";

import * as redis from "redis";

const PORT_REDIS = + process.env.PORT_REDIS || 6379;
const redisClient = redis.createClient(PORT_REDIS);

class MerchantController {

    allMerchants = (req: Request, res: Response, next: NextFunction) => {
        MerchantService.getAll()
            .then(merchants => {
                redisClient.set(req.baseUrl, JSON.stringify(merchants));
                res.send(merchants).status(200)
            })
            .catch((err) => res.status(404).send(err));
    }

    getMerchant = (req: Request, res: Response, next: NextFunction) => {
        MerchantService.getOne(req.params.id)
            .then(merchant => res.send(merchant).status(200))
            .catch(() => res.status(404).send({
                message: "Not found"
            }));
    }

    addMerchant = (req: Request, res: Response, next: NextFunction) => {
        let merchant = new Merchant(req.body);
        MerchantService.add(merchant)
            .then(() => {
                redisClient.del(req.baseUrl);
                res.status(201).send({ message: "Success" });
            })
            .catch((err) => res.status(500).send(err));
    }

    deleteMerchant = (req: Request, res: Response, next: NextFunction) => {
        MerchantService.deleteById(req.params.id)
            .then(() => {
                redisClient.del(req.baseUrl);
                res.status(200).send({ message: "Success" });
            })
            .catch((err) => res.status(500).send(err))
    }

    updateMerchant = (req: Request, res: Response, next: NextFunction) => {
        MerchantService.update(req.params.id, req.body)
            .then(merchant => {
                redisClient.del(req.baseUrl);
                res.send(merchant).status(200);
            })
            .catch((err) => res.status(500).send(err));
    }
}

export default new MerchantController();
