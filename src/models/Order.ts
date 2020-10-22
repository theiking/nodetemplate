import * as mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    merchant: {
        type: {
            name: String,
            address: String,
            locations: [String],
            district: String,
            state: String,
            phone: String
        },
    }
})

export default mongoose.model('Order',OrderSchema);;
