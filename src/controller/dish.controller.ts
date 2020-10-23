import { Request, Response, NextFunction} from "express";
import DishService from "../services/dish.service";
import Dish from "../models/Dish";

class DishController {

    allDishs = (req: Request, res: Response, next: NextFunction) => {
        DishService.getAll()
            .then(dishs => res.send(dishs).status(200))
            .catch(()=> res.status(404));            
    }

    getDish = (req: Request, res: Response, next: NextFunction) => {
        DishService.getOne(req.params.id)
            .then(dish => res.send(dish).status(200))
            .catch(()=> res.status(404).json({
                message: "Not found"
            }));
    }

    addDish = (req: Request, res: Response, next: NextFunction) => {
        let dish = new Dish(req.body);
        DishService.add(dish)
            .then(() => res.status(201).json({
                message: "Success"
            })) 
            .catch(() => res.status(500).send(next));
    }

    deleteDish = (req: Request, res: Response, next: NextFunction) => {
        DishService.deleteById( req.params.id )
            .then(() => res.status(200).json({
                message: "Success"
            }))
            .catch((err) => res.status(500).json(err))
    }
    
    updateDish = (req: Request, res: Response, next: NextFunction) => {
        DishService.update( req.params.id , req.body)
            .then(dish => res.send(dish).status(200))
            .catch(() => res.status(500).send(next));
    }

    
}

export default new DishController();