import axios from 'axios';
import 'dotenv/config';

const apiKey = process.env.TMDB_API_KEY;
const baseURL = 'https://api.themoviedb.org/3';

export async function searchMovies(query, page = 1) {
  try {
    const url = `${baseURL}/search/movie`;
    const params = { api_key: apiKey, query, page, sort: 'popularity.desc' };
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('Search error:', error.message);
    throw new Error('Failed to search movies');
  }
}

export async function getMovieDetails(movieId) {
  try {
    const response = await axios.get(`${baseURL}/movie/${movieId}`, {
      params: { api_key: apiKey }
    });
    return response.data;
  } catch (error) {
    console.error('Movie details error:', error.message);
    throw new Error('Failed to get movie details');
  }
}

export async function getRecommendations(movieId, page = 1) {
  try {
    const response = await axios.get(`${baseURL}/movie/${movieId}/recommendations`, {
      params: { 
        api_key: apiKey,
        page 
      }
    });
    return response.data;
  } catch (error) {
    console.error('Recommendations error:', error.message);
    throw new Error('Failed to get recommendations');
  }
}

export async function getTrending(timeWindow = 'week') {
  try {
    const response = await axios.get(`${baseURL}/trending/movie/${timeWindow}`, {
      params: { api_key: apiKey }
    });
    return response.data;
  } catch (error) {
    console.error('Trending error:', error.message);
    throw new Error('Failed to get trending movies');
  }
}

export async function getPopular(page = 1) {
  try {
    const response = await axios.get(`${baseURL}/movie/popular`, {
      params: { 
        api_key: apiKey,
        page 
      }
    });
    return response.data;
  } catch (error) {
    console.error('Popular error:', error.message);
    throw new Error('Failed to get popular movies');
  }
}

export async function getByGenre(genreId, page = 1) {
  try {
    const response = await axios.get(`${baseURL}/discover/movie`, {
      params: { 
        api_key: apiKey,
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

export async function discoverMovies(options = {}) {
  try {
    const {
      page = 1,
      sortBy = 'popularity.desc',
      year,
      minRating,
      maxRating,
      genres,
      withCast,
      withCrew,
      language,
      query
    } = options;

    const params = {
      api_key: apiKey,
      page,
      sort_by: sortBy,
      language
    };

    if (year) params.year = year;
    if (minRating) params['vote_average.gte'] = minRating;
    if (maxRating) params['vote_average.lte'] = maxRating;
    if (genres) params.with_genres = genres;
    if (withCast) params.with_cast = withCast;
    if (withCrew) params.with_crew = withCrew;
    if (query) params.with_text_query = query;
    console.log('Discover params:', params);
    const response = await axios.get(`${baseURL}/discover/movie`, { params });
    return response.data;
  } catch (error) {
    console.error('Discover error:', error.message);
    throw new Error('Failed to discover movies');
  }
}

export default class MovieService {
  constructor() {
    this.apiKey = process.env.TMDB_API_KEY;
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

  async discoverMovies(options = {}) {
    try {
      const {
        page = 1,
        sortBy = 'popularity.desc',
        year,
        minRating,
        maxRating,
        genres,
        withCast,
        withCrew,
        language = 'en-US'
      } = options;

      const params = {
        api_key: this.apiKey,
        page,
        sort_by: sortBy,
        language
      };

      if (year) params.year = year;
      if (minRating) params['vote_average.gte'] = minRating;
      if (maxRating) params['vote_average.lte'] = maxRating;
      if (genres) params.with_genres = genres;
      if (withCast) params.with_cast = withCast;
      if (withCrew) params.with_crew = withCrew;

      const response = await axios.get(`${this.baseURL}/discover/movie`, { params });
      return response.data;
    } catch (error) {
      console.error('Discover error:', error.message);
      throw new Error('Failed to discover movies');
    }
  }
}