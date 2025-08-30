import express from 'express';
import 'dotenv/config';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

await connectDB();

/**
 * CORS (manual) — do this before body parsers & routes.
 * Allows prod, local dev, and handles preflight.
 * If you need preview URLs, add them to allowedOrigins.
 */
const allowedOrigins = [
  'http://localhost:5173', // Vite dev
  'http://localhost:3000', // alt local
  'https://wild-byte-full-stack.vercel.app', // your deployed frontend
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (!origin || allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin || allowedOrigins[2]);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
      'Access-Control-Allow-Methods',
      'GET,POST,PUT,PATCH,DELETE,OPTIONS'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
  }
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

/**
 * Body parsers — raise limits so long posts don’t 413.
 * Adjust '5mb' to whatever your content requires.
 */
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));

// Routes
app.get('/', (req, res) => res.send('API is Working'));
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

/**
 * Global error handler — ensures CORS headers on errors too.
 * Catches large body errors and returns a clear message.
 */
app.use((err, req, res, next) => {
  const origin = req.headers.origin;
  if (origin) res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Credentials', 'true');

  if (err?.type === 'entity.too.large') {
    return res.status(413).json({
      success: false,
      message:
        'Request body too large. Please shorten content or increase server limit.',
    });
  }

  console.error('Server error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Server error',
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});

export default app;
