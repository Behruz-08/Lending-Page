// Pagination.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from './productsSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage, items } = useSelector((state) => state.products);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button key={page} onClick={() => handlePageChange(page)}>{page}</button>
      ))}
    </div>
  );
};

export default Pagination;
