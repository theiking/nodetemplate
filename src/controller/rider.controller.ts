import { Request, Response, NextFunction } from "express";
import Rider from "../models/Rider";
import RiderService from "../services/rider.service";

class RiderController {

    getRider = async function (req: Request, res: Response, next: NextFunction) {

    }

    allRiders = (req: Request, res: Response, next: NextFunction) => {

    }

    addRider = async (req: Request, res: Response, next: NextFunction) =>{

    }

    deleteRider = async (req: Request, res: Response, next: NextFunction) =>{

    }

    updateRider = async (req: Request, res: Response, next: NextFunction) =>{

    }
}

export default new RiderController();