const SearchBar = ({ value, onChange }) => (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{ marginBottom: '20px', padding: '8px', width: '100%' }}
      className="w-full mb-4 p-2 border border-gray-300 rounded"
    />
  );
  export default SearchBar;