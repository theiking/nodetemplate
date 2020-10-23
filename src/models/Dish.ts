import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

interface IDish extends Document {
    name: string;
    price: number;
    image: string;
    description: string;
    isAvailable: { type: Boolean};
}

const DishSchema = new mongoose.Schema ({
    name: { type: String, minLength: 6, maxLength: 30},
    price: { type: Number},
    image: { type: String},
    description: { type: String},
    isAvailable: { type: Boolean}
})

export default mongoose.model<IDish>('Dish',DishSchema);