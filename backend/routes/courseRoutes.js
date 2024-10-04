import express from 'express';
import {
  createCourse,
  getCourses,
  updateCourse,
  deleteCourse,
} from '../controllers/courseController.js';

const router = express.Router();

router.post('/courses', createCourse);
router.get('/courses', getCourses);  
router.put('/courses/:id', updateCourse);
router.delete('/courses/:id', deleteCourse);

export default router;
