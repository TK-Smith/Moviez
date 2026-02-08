import Spinner from "./Spinner";
import poster from "../assets/poster.png";
import star from "../assets/star.png";
import "../styles/romanceCard.css";
import { Link } from "react-router-dom";

const RomanceCard = ({ isLoading, errorMessage, romanceMovies }) => {
  var movieName = "Romance";
  return (
    <section>
      <h1 className="text-amber-50" style={{ fontSize: "30px" }}>
        {movieName} <span className="text-gradient">Movies</span>
      </h1>
      <div>
        {isLoading ? (
          <Spinner />
        ) : errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : (
          <ul className="romance-movies">
            {romanceMovies.slice(0, 4).map((movie) => (
              <div className="romance-card">
                <a
                  href={`https://www.youtube.com/results?search_query=${movie.title}`}
                  target="_blank"
                >
                  <div className="movieImg">
                    <img
                      title={movie.title}
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                          : poster
                      }
                      alt={movie.title}
                    />
                  </div>
                </a>
              </div>
            ))}
            <div className="romance-card more">
              <Link to="/more/10749" className="cover">
                <span className="text-gradient">More {movieName} &#10132;</span>
              </Link>
            </div>
          </ul>
        )}
      </div>
    </section>
  );
};

export default RomanceCard;
