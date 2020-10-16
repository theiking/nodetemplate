import { Request, Response } from "express";
import User from "../models/User";
import UserService from "../services/UserService";

class UserApi {

    allUsers = (req: Request, res: Response, next: any) => {

        UserService.getAll()
            .then(users => res.send(users).status(200))
            .catch(err => {
                res.json(err).status(404);
            });
    }

    getUserById = (req: Request, res: Response, next: any) => {
        UserService.getOne( req.params.id )
            .then(user => res.send(user).status(200))
            .catch(err => res.status(404).send(err.message));
            
    }

    addUser = (req: Request, res: Response, next: any) => {
        let user = new User(req.body);
        UserService.add(user)
            .then(() => res.status(201).send("Success"))
            .catch((err) => res.status(502).send(err));

    }

    deleteUser = (req: Request, res: Response, next: any) => {
        UserService.deleteById( req.params.id )
            .then(() => res.status(200).json({
                message: "success"
            }))
            .catch(() => res.status(502).send(next))
    }

    updateUser = (req: Request, res: Response, next: any) => {
        UserService.update( req.params.id , req.body)
            .then(user => res.send(user).status(200))
            .catch(() => res.status(502).send("FAIL"));
    }

}

export default new UserApi;