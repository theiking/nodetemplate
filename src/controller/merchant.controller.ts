import { Request, Response, NextFunction} from "express";
import Merchant from "../models/Merchant";
import MerchantService from "../services/merchant.service";

class MerchantController {
    
    allMerchants = (req: Request, res: Response, next: NextFunction) => {
        MerchantService.getAll()
            .then(merchants => res.send(merchants).status(200))
            .catch(()=> res.status(404));            
    }

    getMerchant = (req: Request, res: Response, next: NextFunction) => {
        MerchantService.getOne(req.params.id)
            .then(merchant => res.send(merchant).status(200))
            .catch(()=> res.status(404).json({
                "message": "Not found"
            }));
    }

    addMerchant = (req: Request, res: Response, next: NextFunction) => {
        let merchant = new Merchant(req.body);
        MerchantService.add(merchant)
            .then(() => res.status(201).json({
                "message": "Success"
            })) 
            .catch(() => res.status(500).send(next));
    }

    deleteMerchant = (req: Request, res: Response, next: NextFunction) => {
        MerchantService.deleteById( req.params.id )
            .then(() => res.status(200).json({
                "message": "Success"
            }))
            .catch((err) => res.status(500).json(err))
    }
    
    updateMerchant = (req: Request, res: Response, next: NextFunction) => {
        MerchantService.update( req.params.id , req.body)
            .then(merchant => res.send(merchant).status(200))
            .catch(() => res.status(500).send(next));
    }
}

export default new MerchantController();
