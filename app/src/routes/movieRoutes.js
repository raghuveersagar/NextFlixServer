import {
    searchMovies,
    getTrending,
    getPopular,
    getByGenre,
    getMovieDetails,
    getRecommendations
} from "../controllers/movieController.js";
import express from 'express';
export const routes = express.Router();

routes.get('/search', searchMovies);
routes.get('/trending', getTrending);
routes.get('/popular', getPopular);
routes.get('/genre/:genreId', getByGenre);
routes.get('/:id', getMovieDetails);
routes.get('/:id/recommendations', getRecommendations);
export default routes;