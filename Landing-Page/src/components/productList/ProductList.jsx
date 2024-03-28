
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setFilter } from '../../features/Products/ProductsSlices';
import ProductCard from '../../features/Products/ProductsSlices'// Assuming the correct import path for ProductCard

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading, filter } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  // Filter the items based on price and title
  const filteredItems = Array.isArray(items) ? items.filter(item => item.price > 0 && item.title.toLowerCase().includes(filter.toLowerCase())) : [];

  return (
    <div>
      <input
        type="text"
        placeholder="Filter products"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {filteredItems.map((product) => (
            <ProductCard key={product.id} product={[product]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;

