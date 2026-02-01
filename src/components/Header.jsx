import heroBanner from "../assets/hero-banner.png";
import "../styles/header.css";
import Search from "./Search";

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="hero">
      <div className="heroContainer">
        <div>
          <img className="heroBanner" src={heroBanner} alt="hero Banner" />
        </div>
        <div>
          <h1 className="heroP">
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without The Hassle
          </h1>
        </div>
      </div>
      <div className="heroStatement">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </header>
  );
};

export default Header;
