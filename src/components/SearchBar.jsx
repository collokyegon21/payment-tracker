export default function SearchBar({ search, onSearch }) {
  return (
    <input
      className="form-control"
      type="search"
      placeholder="Search purchases"
      value={search}
      onChange={(event) => onSearch(event.target.value)}
    />
  );
}
