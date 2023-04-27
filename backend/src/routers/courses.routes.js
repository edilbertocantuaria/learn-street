import { Router } from 'express';
import { validateSchema } from "../middlewares/validateSchema.js"
import { courseSchema } from '../schemas/auth.schemas.js';
import { createCourse } from '../controllers/courses.controllers.js';

const courseRouter = Router();

courseRouter.post("/courses", validateSchema(courseSchema), createCourse);

export default courseRouter;
