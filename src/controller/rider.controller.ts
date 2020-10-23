import { Request, Response, NextFunction } from "express";
import Rider from "../models/Rider";
import RiderService from "../services/rider.service";

class RiderController {

    allRiders = (req: Request, res: Response, next: NextFunction) => {
        RiderService.getAll()
            .then(riders => res.send(riders).status(200))
            .catch(()=> res.status(404));            
    }

    getRider = (req: Request, res: Response, next: NextFunction) => {
        RiderService.getOne(req.params.id)
            .then(rider => res.send(rider).status(200))
            .catch(()=> res.status(404).json({
                "message": "Not found"
            }));
    }

    addRider = (req: Request, res: Response, next: NextFunction) => {
        let rider = new Rider(req.body);
        RiderService.add(rider)
            .then(() => res.status(201).json({
                "message": "Success"
            })) 
            .catch(() => res.status(500).send(next));
    }

    deleteRider = (req: Request, res: Response, next: NextFunction) => {
        RiderService.deleteById( req.params.id )
            .then(() => res.status(200).json({
                "message": "Success"
            }))
            .catch((err) => res.status(500).json(err))
    }
    
    updateRider = (req: Request, res: Response, next: NextFunction) => {
        RiderService.update( req.params.id , req.body)
            .then(rider => res.send(rider).status(200))
            .catch(() => res.status(500).send(next));
    }
}

export default new RiderController();