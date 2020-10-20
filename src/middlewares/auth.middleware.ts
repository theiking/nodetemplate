import { Request, Response } from "express";
import * as jwt from 'jsonwebtoken';
import * as dotenv from "dotenv"

dotenv.config();
const secretKey = process.env.SECRET_KEY;


export const checkToken = (req: Request, res: Response, next: any) => {

    if (req.path.startsWith("/api/auth")||req.path.startsWith("/api/docs")) {
        return next();
    }
    try {
        let tokenBeaer = req.headers.authorization;
        if(tokenBeaer.startsWith("Bearer ")) {
            const token = tokenBeaer.replace("Bearer ","");
            jwt.verify(token, secretKey, (err: any, payload: any) => {
                
                if (payload) {
                    res.locals.user = payload;
                    next();
                } else {
                    res.status(401).send('Unauthorized');
                }
        })
        } else {
            res.status(401).send('Unauthorized');
        }
    } catch (err) {
        res.status(401).send('No token provided');
    }
};

export const protectedRoute = (req: Request, res: Response, next: any) => {
    
    if (req.path.startsWith("/api/auth")||req.path.startsWith("/api/docs")) {
        return next();
    }

    if (res.locals.user) {
        return next();
    }
    
    res.status(401).send('Unauthorized');
}
