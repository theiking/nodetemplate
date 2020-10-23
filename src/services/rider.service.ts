import Rider from '../models/Rider';
import { GenericService } from './generic.service';

class RiderService extends GenericService{
    constructor() {
        super(Rider);
    }
}

export default new RiderService();