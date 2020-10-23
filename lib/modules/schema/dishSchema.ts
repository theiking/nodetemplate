import * as mongoose from "mongoose";
import { ModificationNote } from "../common/model";

const Schema = mongoose.Schema;

// User of schema
const dishSchema = new Schema({
  Name: String,
  Price: Number,
  Image: String,
  Description: String,
  Available: Boolean,
  modification_notes: [ModificationNote],
});

export default mongoose.model("dish", dishSchema);
