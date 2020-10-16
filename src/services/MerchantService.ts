import Merchant from '../models/Merchant';
import { GenericService } from '../services/GerericService';

 class MerchantService extends GenericService {

    constructor() {
        super(Merchant);
    }
}

export default new MerchantService();
