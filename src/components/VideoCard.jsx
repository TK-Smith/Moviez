import "../styles/videoCard.css";
import star from "../assets/star.png";
import Spinner from "./Spinner";
import poster from "../assets/poster.png";

const VideoCard = ({ isLoading, movieList, errorMessage }) => {
  return (
    <section>
      <h1 className="text-amber-50" style={{ fontSize: "30px" }}>
        All <span className="text-gradient">Movies</span>
      </h1>
      <div>
        {isLoading ? (
          <Spinner />
        ) : errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : (
          <ul className="all-movies">
            {movieList.map((movie) => (
              <div className="movie-card">
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
                  <div>
                    <h3
                      title={movie.title}
                      className="font-stretch-condensed text-gradient"
                      style={{ fontSize: "20px" }}
                    >
                      {movie.title}
                    </h3>
                    <div className="content">
                      <div className="rating">
                        <img
                          style={{ verticalAlign: "top" }}
                          src={star}
                          alt="Star Icon"
                        />
                      </div>
                      <p
                        style={{ display: "inline-block" }}
                        className="text-white vote"
                      >
                        {movie.vote_average
                          ? movie.vote_average.toFixed(1)
                          : "N/A"}
                      </p>
                      <span className="font-extrabold"> &#183; </span>
                      <p className="lang text-white">
                        {movie.original_language}
                      </p>
                      <span className="font-extrabold"> &#183; </span>
                      <p className="text-white year">
                        {movie.release_date
                          ? movie.release_date.split("-")[0]
                          : "N/A"}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default VideoCard;
