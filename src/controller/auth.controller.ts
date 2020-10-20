import { Request, Response } from "express";
import User from "../models/User";
import UserService from "../services/user.service";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv"

dotenv.config();
const secretKey = process.env.SECRET_KEY;

class AuthApi {

    signIn = async function (req: Request, res: Response, next: any) {
        try {
            let user = await User.findOne({ email: req.body.email });
            User.comparePassword(req.body.password, user.password, (err: any, isMatch: boolean) => {
                if (!isMatch) {
                    res.status(400).json({ message: 'Authentication failed.' });
                    return;
                }
                res.json({
                    token: jwt.sign(
                        { email: user.email, fullName: user.fullName, _id: user._id },
                        secretKey, { expiresIn: 24*60*60 })
                });
            });
        } catch (error) {
            res.status(400).json({ message: 'Authentication failed.', error: error });
        }
    };

    signup = async function (req: Request, res: Response, next: any) {
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
            res.status(400).send(error.message);
        }
    };
}

export default new AuthApi;