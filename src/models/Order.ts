import * as mongoose from "mongoose";
import { State } from "../config/common/enum"
const OrderSchema = new mongoose.Schema({
    merchantId: { type: String, required: true},
    merchantName: { type: String, required: true},
    toAddress: { type: String, required: true},
    toLocation: { type:[String], required: true },
    fromAddress: { type: String, required: true },
    fromLocation: {type: [String], required: true},
    distance: { type: Number, required: true },
    deliveryfee: { type: Number, required: true },
    orderfee: { type: Number, required: true },
    state: { type: String, enum: State, required: true },
    dish: {
        type: [{
            _id: String,
            name: String,
            price: Number,
            image: String,
            description: Number,
        }],
        required: true
    }
})

export default mongoose.model('Order', OrderSchema);;
