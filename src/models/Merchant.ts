import * as mongoose from 'mongoose';
import {District, States, getEnumvalues} from '../config/common/enum';
import { Document } from 'mongoose';

export interface IMerchant extends Document {
    name: string;
    address: string;
    locations: string[];
    district: string;
    state: string;
    phone: string;
    image: string;
    openHours: [];
    dish: [];
}

const MerchantSchema = new mongoose.Schema({
    name: { type: String, minLength: 6, maxLength: 30 },
    address: { type: String, minLength: 10 },
    location: { type: [String] },
    district: { type: String, enum: getEnumvalues(District) },
    state: { type: String, enum: getEnumvalues(States) },
    phone: { type: String, minLength: 9 },
    image: { type: String },
    openHours: {
        type: [{
            openAt: String,
            closeAt: String,
        }],
        length: 2
    },
    dish: {
        type: [{
            name: { type: String, minLength: 6, maxLength: 30 },
            price: { type: Number },
            image: { type: String },
            description: { type: String }
        }]
    }
})

const Merchant = mongoose.model<IMerchant>('Merchant', MerchantSchema);

export default Merchant;