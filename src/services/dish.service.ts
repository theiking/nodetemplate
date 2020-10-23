import Dish from '../models/Dish';
import { GenericService } from './generic.service';

class DishService extends GenericService {
    constructor(){
        super(Dish);
    }


}

export default new DishService();