function SearchBar({ search, setSearch }) {
  return (
    // Search input for filtering students dynamically
    <input
      type="text"
      placeholder="Search Student..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 rounded w-full my-4"
    />
  );
}

export default SearchBar;
