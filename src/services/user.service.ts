import  User  from '../models/User';
import { GenericService } from './generic.service';

class UserService extends GenericService {
    constructor() {
        super(User);
    }
    
}

export default new UserService();