import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
