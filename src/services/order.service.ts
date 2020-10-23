import Order from '../models/Order';
import { GenericService } from './generic.service';

class OrderService extends GenericService {
    constructor() {
        super(Order);
    }
}

export default new OrderService();