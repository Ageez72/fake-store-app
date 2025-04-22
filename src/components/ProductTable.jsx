const ProductTable = ({ products, onRowClick }) => {
    return (
      <div className="table-responsive">
      <table className="w-full border border-gray-300 rounded overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left border-b">Title</th>
            <th className="p-2 text-left border-b">Image</th>
            <th className="p-2 text-left border-b">Price</th>
            <th className="p-2 text-left border-b">Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id} onClick={() => onRowClick(product.id)} className="cursor-pointer hover:bg-gray-50">
              <td className="p-2 border-b title">
                <span>{product.title}</span>
              </td>
              <td className="p-2 border-b">
                <img width={25} src={product.image} alt={product.title} />
              </td>
              <td className="p-2 border-b">${product.price}</td>
              <td className="p-2 border-b">{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  };
  
  export default ProductTable;