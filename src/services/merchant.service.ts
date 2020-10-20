import Merchant from '../models/Merchant';
import { GenericService } from './generic.service';

 class MerchantService extends GenericService {

    constructor() {
        super(Merchant);
    }
}

export default new MerchantService();
