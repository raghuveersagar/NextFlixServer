const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
//  connectDB();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
const movieRoutes = require('./routes/movieRoutes');
app.use('/api/movies', movieRoutes);

app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to MvRec - Movie Recommendation API',
    endpoints: {
      search: '/api/movies/search?q=moviename',
      trending: '/api/movies/trending',
      recommendations: '/api/movies/:id/recommendations'
    }
  }); ui8 
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

module.exports = app;
