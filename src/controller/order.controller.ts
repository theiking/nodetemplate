import { Request, Response, NextFunction} from "express";
import OrderService from "../services/order.service";
import Order from "../models/Order";

class OrderController {

    allOrders = (req: Request, res: Response, next: NextFunction) => {
        OrderService.getAll()
            .then(orders => res.send(orders).status(200))
            .catch(()=> res.status(404));            
    }

    getOrder = (req: Request, res: Response, next: NextFunction) => {
        OrderService.getOne(req.params.id)
            .then(order => res.send(order).status(200))
            .catch(()=> res.status(404).json({
                "message": "Not found"
            }));
    }

    addOrder = (req: Request, res: Response, next: NextFunction) => {
        let order = new Order(req.body);
        OrderService.add(order)
            .then(() => res.status(201).json({
                "message": "Success"
            })) 
            .catch(() => res.status(500).send(next));
    }

    deleteOrder = (req: Request, res: Response, next: NextFunction) => {
        OrderService.deleteById( req.params.id )
            .then(() => res.status(200).json({
                "message": "Success"
            }))
            .catch((err) => res.status(500).json(err))
    }
    
    updateOrder = (req: Request, res: Response, next: NextFunction) => {
        OrderService.update( req.params.id , req.body)
            .then(order => res.send(order).status(200))
            .catch(() => res.status(500).send(next));
    }

    
}

export default new OrderController();