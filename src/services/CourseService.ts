import Course from "../models/Course";
import {GenericService} from './GerericService'

class CourseService extends GenericService{

    constructor() {
        super(Course);
    }

}

export default new CourseService;
