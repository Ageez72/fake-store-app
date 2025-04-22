import { useEffect, useState } from 'react';
import { getProducts } from './services/api';
import ProductTable from './components/ProductTable';
import ProductModal from './components/ProductModal';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination'; // Import the Pagination component
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const itemsPerPage = 5;

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load products.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setCurrentPage(1); // reset to page 1 on new search
  }, [searchQuery]);

  const filteredProducts = products.filter(
    p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 max-w-5xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-4">Fake Store</h1>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500">No products found.</p>
          ) : (
            <>
              <ProductTable
                products={paginatedProducts}
                onRowClick={setSelectedId}
              />
              <Pagination 
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage} // Pass the handler to update currentPage
              />
            </>
          )}
        </>
      )}

      {selectedId && <ProductModal id={selectedId} onClose={() => setSelectedId(null)} />}
    </div>
  );
};

export default App;
