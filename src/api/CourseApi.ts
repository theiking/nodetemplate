import { Request, Response } from "express";
import Course from "../models/Course";
import User from "../models/User";
import CourseService from "../services/CourseService";

class CourseApi {

    allCourses = async (req: Request, res: Response) => {
        try {
            let courses = await CourseService.getAll();
            res.send(courses).status(200);
        } catch (error) {
            res.status(404).send(error);
        }
    }

    getCourse = (req: Request, res: Response) => {
        CourseService.getOne(req.params.id)
            .then(course => res.send(course).status(200))
            .catch(() => res.status(404).json({
                message: "Not found"
            }));
    }

    addCourse = (req: Request, res: Response) => {
        let course = new Course(req.body);

        CourseService.add(course)
            .then(() => res.status(201).json({
                message: "Success"
            }))
            .catch((err) => res.status(500).send(err));
    }

    deleteCourse = (req: Request, res: Response) => {
        CourseService.deleteById(req.params.id)
            .then(() => res.status(200).json({
                message: "Success"
            }))
            .catch((err) => res.status(500).json(err))
    }

    updateCourse = (req: Request, res: Response) => {
        CourseService.update(req.params.id, req.body)
            .then(course => res.send(course).status(200))
            .catch((err) => res.status(500).send(err));
    }

    getCourseByUser = (req: Request, res: Response) => {
        User.findOne({ _id: "5f7eae3056dc092c7d694b62" })
            .then(user => {                
                return Course.find({ _id: { $in: user.toObject().courses } })
            })
            .then(courses => res.send(courses))
    }

}

export default new CourseApi();
