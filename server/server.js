import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

await connectDB();

// Apply CORS to all routes and methods
app.use(
  cors({
    origin: 'https://wild-byte-full-stack.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.options(
  '*',
  cors({
    origin: 'https://wild-byte-full-stack.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('API is Working'));
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

// Global error handler (ensures CORS headers in errors too)
app.use((err, req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://wild-byte-full-stack.vercel.app'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error', error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});

export default app;
