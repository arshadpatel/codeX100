import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import courseRoutes from './routes/courseRoutes.js';
import userRoutes from './routes/userRoutes.js';
import morgan from 'morgan';
dotenv.config();
const app = express();

// Notice: Use bcryptjs or argon2 for hashing instead of bcrypt  to prevent error in docker enviornment

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;
// Connect Database
connectDB();

// Middleware
app.use(express.json()); // For parsing application/json
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', courseRoutes);
app.use('/api/user', userRoutes);

// Handle 404
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
