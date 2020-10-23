import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import UserService from "../services/user.service";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import * as _ from 'lodash';

dotenv.config();
const secretKey = process.env.SECRET_KEY;

class AuthController {
    signIn = async function (req: Request, res: Response, next: NextFunction) {
        try {
            let user = await User.findOne({ email: req.body.email });
            User.comparePassword(req.body.password, user.password, (err: any, isMatch: boolean) => {
                if (!isMatch) {
                    res.status(400).json({ message: 'Authentication failed.' });
                    return;
                }
                res.json({
                    token: jwt.sign(
                        { email: user.email, fullName: user.fullname, _id: user._id },
                        secretKey)
                });
            });
        } catch (error) {
            res.status(400).json({ message: 'Authentication failed.', error: error });
        }
    };   

    signup = async function (req: Request, res: Response, next: NextFunction) {
        let user = new User(req.body);

        let result = await User.findOne({ email: user.email });
        if (result) {
            res.status(409).json({ message: 'Email already exist' });
            return;
        }

        try {
            await UserService.add(user);
            res.status(201).json({ message: "Signup successfully" });
        } catch (error) {
            res.status(400).json(error);
        }
    };
}

export default new AuthController();