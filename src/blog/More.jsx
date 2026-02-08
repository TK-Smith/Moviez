import { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import { Link, useParams } from "react-router-dom";
import "./more.css";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const More = () => {
  const { id } = useParams();
  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!id) {
    return;
  }
  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=${id}sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        setErrorMessage("Failed to fetch movies");
        console.log("rehbdw");
        return;
      }
      const data = await response.json();
      console.log(data);
      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Link to="/">
        <button className="back text-gray-800">&#8592;</button>
      </Link>
      {movieList && (
        <VideoCard
          movieList={movieList}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
      )}
    </>
  );
};

export default More;
