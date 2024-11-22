import mongoose from 'mongoose';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

// MongoDB connection
const connectDB = async () => {
  try {
    const uri = process.env.DB_URI;
    if (!uri) {
      throw new Error('DB_URI is not defined in .env file');
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

// Define the feedback schema
const feedbackSchema = new mongoose.Schema({
  email: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// Feedback route handler (for submitting feedback)
const handleFeedback = async (req, res) => {
  const { email, message } = req.body;

  // Validate required fields
  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required!' });
  }

  try {
    // Save the feedback in the database
    const newFeedback = new Feedback({
      email: email,
      message: message,
    });
    
    await newFeedback.save();

    // Send Thank You Email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASSWORD, // Your email password (use environment variables for security)
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Send thank you email to the user who provided feedback
      subject: 'Thank You for Your Feedback!',
      text: `Dear user,\n\nThank you for your valuable feedback!\n\nWe appreciate your time and effort.\n\nBest Regards,\nYour Company`,
    };

    await transporter.sendMail(mailOptions);

    // Respond with success message
    res.status(200).json({ message: 'Feedback submitted successfully, and thank you email sent!' });
  } catch (error) {
    console.error('Error saving feedback or sending email:', error);
    res.status(500).json({ error: 'Error submitting feedback or sending thank you email.' });
  }
};

// MongoDB connection setup
connectDB();

export default handleFeedback;
