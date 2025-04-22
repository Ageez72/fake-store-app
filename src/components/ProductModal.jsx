import { useEffect, useState } from 'react';
import { getProductById } from '../services/api';

const ProductModal = ({ id, onClose }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load product details.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"><div className="bg-white p-6 rounded">Loading...</div></div>;
  if (error) return <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"><div className="bg-white p-6 rounded">{error}</div></div>;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded w-full max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-2">{product.title}
        </h2>
        <span className='flex items-center mb-2'>
          <img width={20} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACu0lEQVR4nO2ZS2sTURTHr28FRUSoC4ViMHPOxLYqRUVcuPEruNKFKPgV+gHEKoiCC4WCILhoaXzW+t50Ydvk3MRdVXBRF924sCAIvmrzl5m0SYa8JnHuZEbyh7OcM7//OfdO7rlRqquuujImCB9zQsVV0PwCws9VHIUsD0K4AM1ALnlExU3Q9NSFd4MmVZwEbR8qVb8U1mEVF0F4wgvPgPBjFQdBUgerq+8aKDj7QkVd0PSwCr5kgh6oKAti74fwcn0DXEDGGlBRFTSn68KXY1xFUcimUg2rX+7CMvLUr6ImCI35qP7qXhhVURIySdtX9Su7oLmvM7AziR7krOMQOgvhSyvr/pNv+HI4z6TdHE4uJ+dMoicYyDf9O4pnGToF4SEIj0B4GsJf2wBtNX5A07tiYegKNF+Atk9CJxPNwYWGoWkxBMg2gxYdxvoGPu7bBOEnnQflevESs3u2NO7CXGojND2KACw8IfQMU72b/e2B/OAGCN+P0NKZdFaHL/iSibRaB6G7nYfncaegLcF7TGi+08FlM4qpE+vbgi+ZgFoDoZsdWDa3AbX2n+A9JjTfCK/yPBIYvMeE0PUQDNxy3hUovMeI5osGK3/VGHjbJ0//G3YsFPiiAb5noAPpMA18MGDgfTjwznlJ01LwBmip5V/btq9NTG3ibPKAeQPaOmPuK0SnQzBAlw0aGDZvwOS8IDxh3oDmeZ9AC8Vx0I0Fn8/Mm4WfS22tee/p/Zp8cefoismpOCQ5Ruhzkw4UME3bzBnI20cbrN9v7hCeT2xvUoChhpcDOYN/hiBrn68B/ss9PWb6dvnOI7xz5cbhe40OnjNnoPI0KvTbndiy1t62880md7vHdOGfFQauBUtd+UKh1yt7II2MnQws71u71+2i5j/Q9CqovNUvcpeKuetxZKwB5x2m8nfV1f+ov0WA2bF0AkOGAAAAAElFTkSuQmCC" alt="filled-star--v1" />
          <span className='text-sm'>
            {product.rating.rate}
          </span>
        </span>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-4"
        />
        <p className="text-gray-700 mb-2">
          <strong>Price:</strong> ${product.price}
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Description:</strong> {product.description}
        </p>
      </div>
    </div>
  );
  
};

export default ProductModal;