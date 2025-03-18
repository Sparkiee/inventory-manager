import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const getTrendingMovies = async (req, res) => {
  console.log("getMovies");
  try {
    const response = await axios.get("https://api.trakt.tv/movies/trending", {
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": "2",
        "trakt-api-key": process.env.TRAKT_CLIENT_ID,
      },
    });

    const top10Movies = response.data.slice(0, 10).map((item, index) => {
      console.log(item.movie.ids.tmdb);
      return {
        id: index,
        title: item.movie.title,
        year: item.movie.year,
      };
    });

    // Display the results
    console.log("Top 10 Trending Movies:");
    // top10Movies.forEach((item, index) => {
    //   console.log(`${index + 1}. ${item.movie.title} (${item.movie.year})`);
    // });

    console.log(top10Movies);
    // res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
