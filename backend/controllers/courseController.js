import Course from '../models/Course.js';
import { courseSchema } from '../validations/courseValidation.js';

// Create a new course
export const createCourse = async (req, res) => {
  try {
    const validatedData = courseSchema.parse(req.body);
    const course = new Course(validatedData);
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ error: error.errors || error.message });
  }
};

// Get all courses
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a course
export const updateCourse = async (req, res) => {
  try {
    const validatedData = courseSchema.parse(req.body);
    const course = await Course.findByIdAndUpdate(req.params.id, validatedData, { new: true });
    if (!course) return res.status(404).json({ error: 'Course not found.' });
    res.json(course);
  } catch (error) {
    res.status(400).json({ error: error.errors || error.message });
  }
};

// Delete a course
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found.' });
    res.status(200).json({ message: 'Course deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
