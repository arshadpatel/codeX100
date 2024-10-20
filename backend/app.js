import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import courseRoutes from './routes/courseRoutes.js';
import userRoutes from './routes/userRoutes.js';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import xssClean from 'xss-clean';
import hpp from 'hpp';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();
const app = express();

// Use bcryptjs or argon2 for password hashing to avoid issues in Docker environments

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Rate Limiting (Apply to all API requests)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes.',
});

// Apply security middleware
app.use(helmet()); // Helps secure Express apps by setting HTTP headers
app.use(cors()); // Enable CORS for all routes
app.use(xssClean()); // Protect against XSS attacks
app.use(hpp()); // Prevent HTTP parameter pollution

// Middleware
app.use(express.json()); // For parsing application/json
app.use(morgan('dev')); // Logs HTTP requests
app.use(express.urlencoded({ extended: true }));

// Apply rate limiting to all routes
app.use(apiLimiter);

// API Routes
app.use('/api', courseRoutes);
app.use('/api/user', userRoutes);

// Healthcheck route for development
app.get("/healthcheck", (_, res) => {
  res.send("Everything is fine & server is listening on port " + PORT);
});

// Handle 404
app.use("*", (req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
