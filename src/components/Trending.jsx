import "../styles/trending.css";

const Trending = ({ trendingMovies }) => {
  return (
    <section className="trending">
      <h2 className="trendingHeader">
        Trending <span className="text-gradient">Movies</span>
      </h2>
      <ul className="trendingList">
        {trendingMovies.map((movie, index) => (
          <li key={movie.$id} className="trendingLi">
            <div className="trendingNumber">
              <p className="trendingId">{index + 1}</p>
            </div>
            <div className="trendingPoster">
              <img
                className="trendingImage"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_url}`}
                alt={movie.title}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Trending;
