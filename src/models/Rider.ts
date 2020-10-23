import * as mongoose from "mongoose";
import { State } from '../config/common/enum';

const RiderSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 6
    },
    email: { type: String },
    phone: { type: String },
    address: { type: String },
    status: { type: String, enum: State },
    joinedAt: { type: Date },
    img: { type: String },
    idcard: { type: String, createIndex: true},
})

export default mongoose.model('Rider', RiderSchema);