import * as mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    merchant: {
        type: {},
    }
})


const Order = mongoose.model('Order',OrderSchema);

export default Order;
