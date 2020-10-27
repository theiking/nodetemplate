import { Request, Response, NextFunction } from "express";
import Rider from "../models/Rider";
import RiderService from "../services/rider.service";

import * as redis from "redis";

const PORT_REDIS = + process.env.PORT_REDIS || 6379;
const redisClient = redis.createClient(PORT_REDIS);

class RiderController {

    allRiders = (req: Request, res: Response, next: NextFunction) => {
        RiderService.getAll()
            .then(riders => {
                redisClient.set(req.baseUrl, JSON.stringify(riders));
                res.send(riders).status(200);
            })
            .catch((err)=> res.status(404).send(err));            
    }

    getRider = (req: Request, res: Response, next: NextFunction) => {
        RiderService.getOne(req.params.id)
            .then(rider => res.send(rider).status(200))
            .catch((err)=> res.status(404).send({
                message: "Not found",
                err
            }));
    }

    addRider = (req: Request, res: Response, next: NextFunction) => {
        let rider = new Rider(req.body);
        RiderService.add(rider)
            .then(() => {
                redisClient.del(req.baseUrl);
                res.status(201).send({message: "Success"})
            }) 
            .catch((err) => res.status(500).send(err));
    }

    deleteRider = (req: Request, res: Response, next: NextFunction) => {
        RiderService.deleteById( req.params.id )
            .then(() => {
                redisClient.del(req.baseUrl);
                res.status(200).send({message: "Success"})
            }) 
            .catch((err) => res.status(500).send(err))
    }
    
    updateRider = (req: Request, res: Response, next: NextFunction) => {
        RiderService.update( req.params.id , req.body)
            .then(rider => () => {
                redisClient.del(req.baseUrl);
                res.status(200).send(rider)
            }) 
            .catch((err) => res.status(500).send(err));
    }
}


export default new RiderController();