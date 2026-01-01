const axios = require('axios');

class MovieService {
  constructor() {
    this.apiKey = "";
    this.baseURL = 'https://api.themoviedb.org/3';
  }

  async searchMovies(query, page = 1) {
    try {
      const response = await axios.get(`${this.baseURL}/search/movie`, {
        params: { 
          api_key: this.apiKey, 
          query,
          page 
        }
      });
      return response.data;
    } catch (error) {
      console.error('Search error:', error.message);
      throw new Error('Failed to search movies');
    }
  }

  async getMovieDetails(movieId) {
    try {
      const response = await axios.get(`${this.baseURL}/movie/${movieId}`, {
        params: { api_key: this.apiKey }
      });
      return response.data;
    } catch (error) {
      console.error('Movie details error:', error.message);
      throw new Error('Failed to get movie details');
    }
  }

  async getRecommendations(movieId, page = 1) {
    try {
      const response = await axios.get(`${this.baseURL}/movie/${movieId}/recommendations`, {
        params: { 
          api_key: this.apiKey,
          page 
        }
      });
      return response.data;
    } catch (error) {
      console.error('Recommendations error:', error.message);
      throw new Error('Failed to get recommendations');
    }
  }

  async getTrending(timeWindow = 'week') {
    try {
      const response = await axios.get(`${this.baseURL}/trending/movie/${timeWindow}`, {
        params: { api_key: this.apiKey }
      });
      return response.data;
    } catch (error) {
      console.error('Trending error:', error.message);
      throw new Error('Failed to get trending movies');
    }
  }

  async getPopular(page = 1) {
    try {
      const response = await axios.get(`${this.baseURL}/movie/popular`, {
        params: { 
          api_key: this.apiKey,
          page 
        }
      });
      return response.data;
    } catch (error) {
      console.error('Popular error:', error.message);
      throw new Error('Failed to get popular movies');
    }
  }

  async getByGenre(genreId, page = 1) {
    try {
      const response = await axios.get(`${this.baseURL}/discover/movie`, {
        params: { 
          api_key: this.apiKey,
          with_genres: genreId,
          page 
        }
      });
      return response.data;
    } catch (error) {
      console.error('Genre error:', error.message);
      throw new Error('Failed to get movies by genre');
    }
  }
}

module.exports = new MovieService();
