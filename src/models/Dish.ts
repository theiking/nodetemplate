import * as mongoose from 'mongoose';

const DishSchema = new mongoose.Schema ({
    name: { type: String, minLength: 6, maxLength: 30},
    price: { type: Number},
    image: { type: String},
    description: { type: String}
})

const Dish = mongoose.model('Dish',DishSchema);

export default Dish;