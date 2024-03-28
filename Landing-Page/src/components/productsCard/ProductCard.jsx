// ProductCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../features/Products/ProductsSlices';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeProduct(product.id));
  };

  return (
    <div>
      <h2>{product[0].title}</h2>
      <p>{product[0].description}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default ProductCard;
