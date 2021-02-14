const SearchBar = (props) => {
  return (
    <input
      placeholder="Search for a movie..."
      className="form-control"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
