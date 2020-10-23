import * as mongoose from 'mongoose';
import { ModificationNote } from '../common/model';

const Schema = mongoose.Schema;

// User of schema
const userSchema = new Schema({
    name: {
            first_name: String,
            middle_name: String,
            last_name: String
    },
    password: {
        type: String,
        required:`Please input your password`,
    },
    email: String,
    phone_number: String,
    gender: String,
    is_deleted: {
        type: Boolean,
        default: false
    },
    modification_notes: [ModificationNote]
});

export default mongoose.model('users', userSchema);