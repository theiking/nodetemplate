import * as mongoose from 'mongoose';
import { State, District } from '../config/common/enum';

const MerchantSchema = new mongoose.Schema({
    name: { type: String, minLength: 6, maxLength: 30 },
    address: { type: String, minLength: 10 },
    location: { type: [String] },
    district: { type: String, enum: District},
    state: { type: String, enum: State},
    phone: { type: String, minLength: 9},
    image: { type: String },
})

const Merchant = mongoose.model('Merchant', MerchantSchema);

export default Merchant;