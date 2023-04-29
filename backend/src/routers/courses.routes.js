import { Router } from 'express';
import { validateSchema } from "../middlewares/validateSchema.js"
import { courseSchema } from '../schemas/courses.schema.js'
import { createCourse, getCursos } from '../controllers/courses.controllers.js';
import { authValidation } from "../middlewares/authSchema.middleware.js"

const courseRouter = Router();

courseRouter.post("/courses", validateSchema(courseSchema), authValidation, createCourse);
courseRouter.get("/courses", getCursos);

export default courseRouter;
