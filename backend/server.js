import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db'; // Path to DB connection
import feedbackRoutes from './routes/feedbackRoutes'; // Import the feedback routes

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Use the feedback routes (which links to the feedback handler)
app.use('/api/feedback', feedbackRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
