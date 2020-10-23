import * as mongoose from "mongoose";
import { ModificationNote } from "../common/model";

const Schema = mongoose.Schema;

// User of schema
const orderSchema = new Schema({
  merchantId: String,
  merchantName: String,
  status: {
    type: Boolean,
    default: false,
  },
  toAddress: String,
  toLocation: [],
    
  fromAddress: String,
  fromLocation: [],
  distance: Number,
  Dish: [],
  User: {},
  modification_notes: [ModificationNote],
});

export default mongoose.model("order", orderSchema);
