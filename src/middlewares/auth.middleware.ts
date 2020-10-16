import { Request, Response } from "express";
import * as jwt from 'jsonwebtoken';

export const checkToken = (req: Request, res: Response, next: any) => {
    if (req.path.startsWith("/api/auth")||req.path.startsWith("/api/docs")) {
        return next();
    }
    try {
        const token = req.headers.authorization;
        jwt.verify(token, "RESTFULAPIs", (err: any, payload: any) => {
            
            if (payload) {
                res.locals.user = payload;
                next();
            } else {
                res.status(401).send('Unauthorized');
            }
        })
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