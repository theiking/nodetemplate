import * as mongoose from "mongoose";
import { ModificationNote } from "../common/model";

const Schema = mongoose.Schema;

// User of schema
const merchantSchema = new Schema({
  Name: String,
  Address: String,
  Location: Array,
  District: String,
  Phone: Number,
  State: String,
  OpeningHours: [
    {
      openAt: Number,
      closeAt: Number,
    },
    {
      openAt: Number,
      closeAt: Number,
    },
  ],
  imageUrl: String,

  Dish: [],

  modification_notes: [ModificationNote],
});

export default mongoose.model("merchant", merchantSchema);
