import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import UserService from "../services/user.service";

import * as redis from "redis";

const PORT_REDIS = + process.env.PORT_REDIS || 6379;
const redisClient = redis.createClient(PORT_REDIS);


class UserController {

    allUsers = (req: Request, res: Response, next: NextFunction) => {

        UserService.getAll()
            .then(users => {
                redisClient.set('getallusers', JSON.stringify(users));
                res.json(users).status(200);
            })
            .catch(err => {
                res.json(err).status(404);
            });
    }

    getUserById = (req: Request, res: Response, next: NextFunction) => {

        UserService.getOne(req.params.id)
            .then(user => {
                res.send(user).status(200);
            })
            .catch(err => res.status(404).json(err.message));
    }

    addUser = (req: Request, res: Response, next: NextFunction) => {
        
        let user = new User(req.body);
        UserService.add(user)
            .then(() => {
                redisClient.del('getallusers');
                res.status(201).json({ message: "Regist successfully" });
            })
            .catch((err) => res.status(502).send(err));
    }

    deleteUser = (req: Request, res: Response, next: NextFunction) => {

        UserService.deleteById(req.params.id)
            .then(() => {
                redisClient.del('getallusers');
                res.status(200).json({ message: "success" });
            })
            .catch(() => res.status(502).send(next));
    }

    updateUser = (req: Request, res: Response, next: NextFunction) => {

        UserService.update(req.params.id, req.body)
            .then(user => {
                redisClient.del('getallusers');
                res.send(user).status(200);
            })
            .catch(() => res.status(502).send("FAIL"));
    }

}

export default new UserController();
