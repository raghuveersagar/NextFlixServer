const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/search', movieController.searchMovies);
router.get('/trending', movieController.getTrending);
router.get('/popular', movieController.getPopular);
router.get('/genre/:genreId', movieController.getByGenre);
router.get('/:id', movieController.getMovieDetails);
router.get('/:id/recommendations', movieController.getRecommendations);

module.exports = router;
