/**
 * Assignment 2 - Portfolio API (Node.js, Express, MongoDB)
 * Author: Jasmine Sidhu
 * Date: 2025-10-31
 */
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import connectDB from './server/config/db.js';
import contactRoutes from './server/routes/contactRoutes.js';
import projectRoutes from './server/routes/projectRoutes.js';
import qualificationRoutes from './server/routes/qualificationRoutes.js';
import userRoutes from './server/routes/userRoutes.js';
import authRoutes from './server/routes/authRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Hello route (for browser check / assignment screenshot)
app.get('/', (req, res) => {
  res.status(200).send("Welcome to Jasmine Sidhu's Portfolio API - Server is running ✅");
});

// API routes
app.use('/api/contacts', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/qualifications', qualificationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server listening on port ${PORT}`);
  });
}).catch((err) => {
  console.error('❌ Failed to connect to DB', err);
});
