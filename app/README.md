# 🎬 MvRec - Movie Recommendation Website

A Node.js-based movie recommendation platform that helps users discover movies based on their preferences using The Movie Database (TMDB) API.

## ✨ Features

- 🔍 Movie search and discovery
- 📈 Trending and popular movies
- 🎯 Personalized recommendations
- 📚 User watchlists and favorites
- ⭐ Movie ratings and reviews
- 🎭 Browse by genre
- 🔗 Integration with TMDB API

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- TMDB API Key

### Installation

1. **Get your TMDB API Key**
   - Go to https://www.themoviedb.org/settings/api
   - Sign up for a free account
   - Request an API key

2. **Configure environment variables**
   ```bash
   # Edit .env file and add your TMDB API key
   TMDB_API_KEY=your_actual_api_key_here
   ```

3. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   ```

4. **Run the application**
   ```bash
   # Development mode with auto-reload
   npm run dev
   
   # Production mode
   npm start
   ```

5. **Access the API**
   - Open http://localhost:3000

## 📡 API Endpoints

### Movies

- `GET /api/movies/search?q=movie_name` - Search for movies
- `GET /api/movies/trending?timeWindow=week` - Get trending movies (day/week)
- `GET /api/movies/popular?page=1` - Get popular movies
- `GET /api/movies/:id` - Get movie details by ID
- `GET /api/movies/:id/recommendations` - Get movie recommendations
- `GET /api/movies/genre/:genreId?page=1` - Get movies by genre

### Example Requests

```bash
# Search for a movie
curl http://localhost:3000/api/movies/search?q=inception

# Get trending movies
curl http://localhost:3000/api/movies/trending

# Get movie recommendations
curl http://localhost:3000/api/movies/550/recommendations
```

## 🏗️ Project Structure

```
MvRec/
├── src/
│   ├── config/
│   │   └── database.js      # MongoDB connection
│   ├── controllers/
│   │   └── movieController.js
│   ├── models/
│   │   ├── Movie.js
│   │   └── User.js
│   ├── routes/
│   │   └── movieRoutes.js
│   ├── services/
│   │   └── movieService.js  # TMDB API integration
│   ├── middleware/
│   ├── utils/
│   └── index.js             # Main application entry
├── public/                  # Static files (CSS, JS, images)
├── views/                   # Templates
├── tests/                   # Test files
├── .env                     # Environment variables
├── .gitignore
├── package.json
└── README.md
```

## 🎭 TMDB Genre IDs

- 28: Action
- 12: Adventure
- 16: Animation
- 35: Comedy
- 80: Crime
- 99: Documentary
- 18: Drama
- 10751: Family
- 14: Fantasy
- 36: History
- 27: Horror
- 10402: Music
- 9648: Mystery
- 10749: Romance
- 878: Science Fiction
- 10770: TV Movie
- 53: Thriller
- 10752: War
- 37: Western

## 🛠️ Technologies

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **API**: The Movie Database (TMDB) API
- **Security**: Helmet, CORS
- **Dev Tools**: Nodemon

## 📝 Environment Variables

```env
PORT=3000                                    # Server port
MONGODB_URI=mongodb://localhost:27017/mvrec # MongoDB connection string
TMDB_API_KEY=your_tmdb_api_key_here        # TMDB API key
JWT_SECRET=your_jwt_secret_here             # JWT secret for authentication
NODE_ENV=development                         # Environment
```

## 🔜 Upcoming Features

- [ ] User authentication (JWT)
- [ ] User profiles and preferences
- [ ] Advanced recommendation algorithm
- [ ] Movie reviews and comments
- [ ] Social features (share, like)
- [ ] Frontend interface (React/Vue)
- [ ] Email notifications
- [ ] Movie trailers integration

## 📚 Resources

- [TMDB API Documentation](https://developers.themoviedb.org/3)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC

---

Made with ❤️ for movie lovers
