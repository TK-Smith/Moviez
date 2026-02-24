import RomanceCard from "./components/RomanceCard";
import ComedyCard from "./components/ComedyCard";
import HorrorCard from "./components/HorrorCard";
import FamilyCard from "./components/FamilyCard";
import AdventureCard from "./components/AdventureCard";
import ActionCard from "./components/ActionCard";
import ScifiCard from "./components/Sci-fi";
import ThrillerCard from "./components/ThrillerCard";
import WesternCard from "./components/WesternCard";
import AnimationCard from "./components/AnimationCard";
import VideoCard from "./components/VideoCard";
import Header from "./components/Header";
import Trending from "./components/Trending";
import { useDebounce } from "react-use";
import { useState, useEffect } from "react";
import { getTrendingMovies, updateSearchCount } from "./appwrite";
import { Link, useParams } from "react-router-dom";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const Pages = () => {
  const { page } = useParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [thrillerMovies, setThrillerMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);
  const [scifiMovies, setScifiMovies] = useState([]);
  const [westernMovies, setWesternMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchMovies = async (query = "") => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURI(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&page=${page}`;

      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      console.log(data);
      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);
      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchWesternMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=37&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setWesternMovies([]);
        return;
      }
      setWesternMovies(data.results || []);
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchFamilyMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=10751&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setFamilyMovies([]);
        return;
      }
      setFamilyMovies(data.results || []);
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAnimationMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=16&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setAnimationMovies([]);
        return;
      }
      setAnimationMovies(data.results || []);
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchThrillerMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=53&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setThrillerMovies([]);
        return;
      }
      setThrillerMovies(data.results || []);
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchScifiMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=878&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setScifiMovies([]);
        return;
      }
      setScifiMovies(data.results || []);
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchRomanceMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=10749&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setRomanceMovies([]);
        return;
      }
      setRomanceMovies(data.results || []);
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchComedyMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=35&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setComedyMovies([]);
        return;
      }
      setComedyMovies(data.results || []);
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchHorrorMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=27&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setHorrorMovies([]);
        return;
      }
      setHorrorMovies(data.results || []);
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchAdventureMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=12&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setAdventureMovies([]);
        return;
      }
      setAdventureMovies(data.results || []);
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchActionMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=28&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        setErrorMessage("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setActionMovies([]);
        return;
      }
      setActionMovies(data.results || []);
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };

  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    } catch (err) {
      console.error(`Error fetching trending movies: ${err}`);
    }
  };

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
    fetchRomanceMovies();
    fetchComedyMovies();
    fetchAdventureMovies();
    fetchActionMovies();
    fetchHorrorMovies();
    fetchFamilyMovies();
    fetchThrillerMovies();
    fetchScifiMovies();
    fetchAnimationMovies();
    fetchWesternMovies();
  }, []);

  return (
    <main style={{ flexGrow: 1 }}>
      <div className="wrapper">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {trendingMovies.length > 0 && (
          <Trending trendingMovies={trendingMovies} />
        )}

        <ActionCard
          actionMovies={actionMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <AdventureCard
          adventureMovies={adventureMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <AnimationCard
          animationMovies={animationMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <ComedyCard
          comedyMovies={comedyMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <FamilyCard
          familyMovies={familyMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />

        <HorrorCard
          horrorMovies={horrorMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <RomanceCard
          romanceMovies={romanceMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <ScifiCard
          scifiMovies={scifiMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <ThrillerCard
          thrillerMovies={thrillerMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <WesternCard
          westernMovies={westernMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <VideoCard
          isLoading={isLoading}
          movieList={movieList}
          errorMessage={errorMessage}
        />
      </div>
      <div className="pages">
        <Link to="/">
          <button>1</button>
        </Link>
        <Link to="/pages/2">
          <button>2</button>
        </Link>
        <Link to="/pages/3">
          <button>3</button>
        </Link>
        <Link to="/pages/4">
          <button>4</button>
        </Link>
        <Link to="/pages/5">
          <button>5</button>
        </Link>
        <Link to="/pages/6">
          <button>6</button>
        </Link>
        <Link to="/pages/7">
          <button>7</button>
        </Link>
        <Link to="/pages/8">
          <button>8</button>
        </Link>
        <Link to="/pages/9">
          <button>9</button>
        </Link>
        <Link to="/pages/10">
          <button>10</button>
        </Link>
      </div>
    </main>
  );
};

export default Pages;
// https://www.youtube.com/watch?v=tpLLst4-3fw&pp=ygUhdG9wIDEwIHBlb3BsZSB3aXRoIHRoZSBoaWdoZXN0IGlx
