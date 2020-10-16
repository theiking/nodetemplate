import * as mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    name: {type: String, maxlength: 255},
    description: {type: String, maxlength: 600},
    image:{type: String, maxlength: 255}
});

const Course = mongoose.model('Course',CourseSchema);

export default Course;