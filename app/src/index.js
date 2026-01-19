import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes/movieRoutes.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT;
// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use('/api/movies', routes);

app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to MvRec - Movie Recommendation API',
    endpoints: {
      search: '/api/movies/search?q=moviename',
      trending: '/api/movies/trending',
      recommendations: '/api/movies/:id/recommendations'
    }
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 MvRec server running on http://localhost:${PORT}`);
});