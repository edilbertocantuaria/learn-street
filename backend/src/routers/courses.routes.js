import { Router } from 'express';
import { validateSchema } from "../middlewares/validateSchema.js"
import { courseSchema } from '../schemas/courses.schema.js'
import { createCourse, getCursos } from '../controllers/courses.controllers.js';

const courseRouter = Router();

courseRouter.post("/courses", validateSchema(courseSchema), createCourse);
courseRouter.get("/courses", getCursos);

export default courseRouter;
