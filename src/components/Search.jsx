const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      🔍
      <input
        type="text"
        className="searchBar"
        placeholder="Search Through Thousands of Movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
