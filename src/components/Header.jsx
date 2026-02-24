//import heroBanner from "../assets/hero-banner.png";
import "../styles/bootstrap.css";
import "../styles/header.css";
import Search from "./Search";
import { Link } from "react-router-dom";

const Header = ({ movieList, searchTerm, setSearchTerm }) => {
  return (
    <header className="hero">
      <div className="head">
        <div className="left">
          <h2>
            <Link to="/">MOVIEZ</Link>
          </h2>
        </div>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      {
        <div
          id="myCarousel"
          class="carousel slide mb-6"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
          </div>
          <div class="carousel-inner">
            {movieList &&
              movieList.slice(0, 1).map((movie) => (
                <div class="carousel-item active">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : poster
                    }
                    width="100%"
                    className="bd-placeholder-img"
                    style={{ height: "400px", objectFit: "cover" }}
                    preserveAspectRatio="xMidYMid slice"
                    alt=""
                  />
                  <div class="container">
                    <div class="carousel-caption text-start">
                      <h1>{movie.title}</h1>
                      <p className="opacity-75 overview">{movie.overview}</p>
                      <p className="releaseDate">{movie.release_date}</p>
                    </div>
                  </div>
                </div>
              ))}
            {movieList &&
              movieList.slice(2, 3).map((movie) => (
                <div class="carousel-item ">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : poster
                    }
                    width="100%"
                    className="bd-placeholder-img"
                    style={{ height: "400px", objectFit: "cover" }}
                    preserveAspectRatio="xMidYMid slice"
                    alt=""
                  />
                  <div class="container">
                    <div class="carousel-caption text-start">
                      <h1>{movie.title}</h1>
                      <p className="opacity-75 overview">{movie.overview}</p>
                      <p className="releaseDate">{movie.release_date}</p>
                    </div>
                  </div>
                </div>
              ))}
            {movieList &&
              movieList.slice(3, 4).map((movie) => (
                <div class="carousel-item ">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : poster
                    }
                    width="100%"
                    className="bd-placeholder-img"
                    style={{ height: "400px", objectFit: "cover" }}
                    preserveAspectRatio="xMidYMid slice"
                    alt=""
                  />
                  <div class="container">
                    <div class="carousel-caption text-start">
                      <h1>{movie.title}</h1>
                      <p className="opacity-75 overview">{movie.overview}</p>
                      <p className="releaseDate">{movie.release_date}</p>
                    </div>
                  </div>
                </div>
              ))}
            {movieList &&
              movieList.slice(4, 5).map((movie) => (
                <div class="carousel-item ">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : poster
                    }
                    width="100%"
                    className="bd-placeholder-img"
                    style={{ height: "400px", objectFit: "cover" }}
                    preserveAspectRatio="xMidYMid slice"
                    alt=""
                  />
                  <div class="container">
                    <div class="carousel-caption text-start">
                      <h1>{movie.title}</h1>
                      <p className="opacity-75 overview">{movie.overview}</p>
                      <p className="releaseDate">{movie.release_date}</p>
                    </div>
                  </div>
                </div>
              ))}
            {movieList &&
              movieList.slice(10, 11).map((movie) => (
                <div class="carousel-item ">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : poster
                    }
                    width="100%"
                    className="bd-placeholder-img"
                    style={{ height: "400px", objectFit: "cover" }}
                    preserveAspectRatio="xMidYMid slice"
                    alt=""
                  />
                  <div class="container">
                    <div class="carousel-caption text-start">
                      <h1>{movie.title}</h1>
                      <p className="opacity-75 overview">{movie.overview}</p>
                      <p className="releaseDate">{movie.release_date}</p>
                    </div>
                  </div>
                </div>
              ))}
            {movieList &&
              movieList.slice(13, 14).map((movie) => (
                <div class="carousel-item ">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : poster
                    }
                    width="100%"
                    className="bd-placeholder-img"
                    style={{ height: "400px", objectFit: "cover" }}
                    preserveAspectRatio="xMidYMid slice"
                    alt=""
                  />
                  <div class="container">
                    <div class="carousel-caption text-start">
                      <h1>{movie.title}</h1>
                      <p className="opacity-75 overview">{movie.overview}</p>
                      <p className="releaseDate">{movie.release_date}</p>
                    </div>
                  </div>
                </div>
              ))}
            {movieList &&
              movieList.slice(17, 18).map((movie) => (
                <div class="carousel-item ">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : poster
                    }
                    width="100%"
                    className="bd-placeholder-img"
                    style={{ height: "400px", objectFit: "cover" }}
                    preserveAspectRatio="xMidYMid slice"
                    alt=""
                  />
                  <div class="container">
                    <div class="carousel-caption text-start">
                      <h1>{movie.title}</h1>
                      <p className="opacity-75 overview">{movie.overview}</p>
                      <p className="releaseDate">{movie.release_date}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      }
      <div className="heroContainer">
        <div>
          <h1 className="heroP">
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without The Hassle
          </h1>
        </div>
      </div>
      <div className="heroStatement"></div>
    </header>
  );
};

export default Header;
