const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div class="input-cnt">
      <i class="material-icons">Search</i>
      <input
        type="search"
        id="dragon"
        placeholder="Search Movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
