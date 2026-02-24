import RomanceCard from "./RomanceCard";
import ComedyCard from "./ComedyCard";
import HorrorCard from "./HorrorCard";
import AdventureCard from "./AdventureCard";
import ActionCard from "./ActionCard";
import FamilyCard from "./FamilyCard";
import ThrillerCard from "./ThrillerCard";
import AnimationCard from "./AnimationCard";
import ScifiCard from "./Sci-fi";
import WesternCard from "./WesternCard";
import MusicCard from "./MusicCard";
import FantasyCard from "./FantasyCard";
import CrimeCard from "./CrimeCard";
import DocumentaryCard from "./DocumentaryCard";
import HistoryCard from "./HistoryCard";
import MysteryCard from "./MysteryCard";
import WarCard from "./WarCard";
import DramaCard from "./DramaCard";
import Header from "./Header";
import Trending from "./Trending";
//import { useDebounce } from "react-use";
import { useState, useEffect } from "react";
import { getTrendingMovies, updateSearchCount } from "./../appwrite";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const Genres = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollerMovieList, setScrollerMovieList] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [thrillerMovies, setThrillerMovies] = useState([]);
  const [musicMovies, setMusicMovies] = useState([]);
  const [mysteryMovies, setMysteryMovies] = useState([]);
  const [crimeMovies, setCrimeMovies] = useState([]);
  const [fantasyMovies, setFantasyMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [warMovies, setWarMovies] = useState([]);
  const [historyMovies, setHistoryMovies] = useState([]);
  const [documentaryMovies, setDocumentaryMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);
  const [scifiMovies, setScifiMovies] = useState([]);
  const [westernMovies, setWesternMovies] = useState([]);
  const [adventureMovies, setAdventureMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  //useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchScrollerMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setScrollerMovieList([]);
        return;
      }
      setScrollerMovieList(data.results || []);
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
  const fetchMusicMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=10402&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMusicMovies([]);
        return;
      }
      setMusicMovies(data.results || []);
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchDocumentaryMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=99&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setDocumentaryMovies([]);
        return;
      }
      setDocumentaryMovies(data.results || []);
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchMysteryMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=9648&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMysteryMovies([]);
        return;
      }
      setMysteryMovies(data.results || []);
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchCrimeMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=80&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setCrimeMovies([]);
        return;
      }
      setCrimeMovies(data.results || []);
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchFantasyMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=14&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setFantasyMovies([]);
        return;
      }
      setFantasyMovies(data.results || []);
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchDramaMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=18&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setDramaMovies([]);
        return;
      }
      setDramaMovies(data.results || []);
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchWarMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=10752&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setWarMovies([]);
        return;
      }
      setWarMovies(data.results || []);
    } catch (err) {
      console.error(`Error fetching movies`);
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchHistoryMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?with_genres=36&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setHistoryMovies([]);
        return;
      }
      setHistoryMovies(data.results || []);
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
    fetchScrollerMovies();
    loadTrendingMovies();
    fetchRomanceMovies();
    fetchComedyMovies();
    fetchAdventureMovies();
    fetchActionMovies();
    fetchHorrorMovies();
    fetchFamilyMovies();
    fetchThrillerMovies();
    fetchWarMovies();
    fetchCrimeMovies();
    fetchDramaMovies();
    fetchFantasyMovies();
    fetchHistoryMovies();
    fetchMusicMovies();
    fetchDocumentaryMovies();
    fetchMysteryMovies();
    fetchScifiMovies();
    fetchAnimationMovies();
    fetchWesternMovies();
  }, []);

  return (
    <main style={{ flexGrow: 1 }}>
      <div className="wrapper">
        <Header
          isLoading={isLoading}
          movieList={scrollerMovieList}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
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
        <CrimeCard
          crimeMovies={crimeMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <DocumentaryCard
          documentaryMovies={documentaryMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <DramaCard
          dramaMovies={dramaMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <FamilyCard
          familyMovies={familyMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <FantasyCard
          fantasyMovies={fantasyMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <HistoryCard
          historyMovies={historyMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <HorrorCard
          horrorMovies={horrorMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <MusicCard
          musicMovies={musicMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <MysteryCard
          mysteryMovies={mysteryMovies}
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
        <WarCard
          warMovies={warMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
        <WesternCard
          westernMovies={westernMovies}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
      </div>
    </main>
  );
};

export default Genres;
