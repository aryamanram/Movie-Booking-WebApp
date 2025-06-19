import axios from "axios";

// API to fetch now playing movies from TMDB
export const getNowPlayingMovies = async (req, res) => {
    try {
        const {data } = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
            headers: {Authorization: `Bearer ${process.env.TMDB_API_KEY}`},
        })

        const movies = data.results;
        res.json({success: true, movies: movies})
    } catch (error) {
        console.error(error);
        res.json({success: false, message: error.message});
    }
}

// API to add new show to the database
export const addShow = async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.json({success: false, message: error.message});
    }
}