import Spinner from "./Spinner";
import poster from "../assets/poster.png";
import "../styles/romanceCard.css";
import { Link } from "react-router-dom";

const ActionCard = ({ isLoading, errorMessage, actionMovies }) => {
  var movieName = "Action";
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
            {actionMovies.slice(0, 4).map((movie) => (
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
              <Link to="/more/28" className="cover">
                <span className="text-gradient">More {movieName} &#10132;</span>
              </Link>
            </div>
          </ul>
        )}
      </div>
    </section>
  );
};

export default ActionCard;
