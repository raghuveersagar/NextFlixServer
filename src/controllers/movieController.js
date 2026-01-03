import {
  searchMovies as searchMoviesSvc,
  getMovieDetails as getMovieDetailsSvc,
  getRecommendations as getRecommendationsSvc,
  getTrending as getTrendingSvc,
  getPopular as getPopularSvc,
  getByGenre as getByGenreSvc
} from "../services/movieService.js";

export const searchMovies = async (req, res) => {
  try {
    const { q, page } = req.query;
    if (!q) {
      return res.status(400).json({ error: 'Search query is required' });
    }
    const results = await searchMoviesSvc(q, page);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await getMovieDetailsSvc(id);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRecommendations = async (req, res) => {
  try {
    const { id } = req.params;
    const { page } = req.query;
    const recommendations = await getRecommendationsSvc(id, page);
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTrending = async (req, res) => {
  try {
    const { timeWindow } = req.query;
    const trending = await getTrendingSvc(timeWindow);
    res.json(trending);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPopular = async (req, res) => {
  try {
    const { page } = req.query;
    const popular = await getPopularSvc(page);
    res.json(popular);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getByGenre = async (req, res) => {
  try {
    const { genreId } = req.params;
    const { page } = req.query;
    const movies = await getByGenreSvc(genreId, page);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
