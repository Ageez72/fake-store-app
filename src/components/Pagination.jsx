const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="mt-4 space-x-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => handlePageChange(i + 1)}
          className={`px-3 py-1 border rounded ${
            currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;