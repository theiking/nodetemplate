import  User  from '../models/User';
import { GenericService } from './GerericService';


class UserService extends GenericService {
    constructor() {
        super(User);
    }
    
}

export default new UserService();