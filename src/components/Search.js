const Search = ({onInputChange}) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="search robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={onInputChange}
      />
    </div>
  );
};

export default Search;
