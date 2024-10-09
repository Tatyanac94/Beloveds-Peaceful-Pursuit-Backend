import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './api/routes'; // Import the routes defined in the routes folder
import { errorHandler } from './api/middleware/errorHandlerMiddleware'; // Error handling middleware

const app = express();
const PORT = process.env.PORT || 4000; // Set your desired port

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Use routes
app.use('/api', routes); // Prefix all routes with '/api'

// Error handling middleware
app.use(errorHandler); // Use your centralized error handler

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
