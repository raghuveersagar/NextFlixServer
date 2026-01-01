import movieService from '../services/movieService';
const Movie = require('../models/Movie');

exports.searchMovies = async (req, res) => {
  try {
    const { q, page } = req.query;
    if (!q) {
      return res.status(400).json({ error: 'Search query is required' });
    }
    const results = await movieService.searchMovies(q, page);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movieService.getMovieDetails(id);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRecommendations = async (req, res) => {
  try {
    const { id } = req.params;
    const { page } = req.query;
    const recommendations = await movieService.getRecommendations(id, page);
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTrending = async (req, res) => {
  try {
    const { timeWindow } = req.query;
    const trending = await movieService.getTrending(timeWindow);
    res.json(trending);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPopular = async (req, res) => {
  try {
    const { page } = req.query;
    const popular = await movieService.getPopular(page);
    res.json(popular);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getByGenre = async (req, res) => {
  try {
    const { genreId } = req.params;
    const { page } = req.query;
    const movies = await movieService.getByGenre(genreId, page);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
