import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: { 
    type: Number,
    required: true,
    min: 0
   },
  description: { 
    type: String, 
    required: true, 
    trim: true
   },
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
