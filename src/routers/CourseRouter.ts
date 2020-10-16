import courseApi from "../api/CourseApi";
import { Router } from "express";


export class CourseRouter {
    private router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get("/user",courseApi.getCourseByUser);
        this.router.get("/:id",courseApi.getCourse);
        this.router.get("/",courseApi.allCourses);
        this.router.post("/",courseApi.addCourse);
        this.router.delete("/:id",courseApi.deleteCourse);
        this.router.put("/:id",courseApi.updateCourse);  
    }

    getRouter(): Router {
        return this.router;
    }
}




export default new CourseRouter().getRouter();