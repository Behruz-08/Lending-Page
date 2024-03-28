
import React, { useState, useEffect } from "react";
import style from "./CarGallery.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  setFilterBrand,
  setFilterModel,
  setFilterPrice,
  setPage,
  setNewCar,
  addCar,
} from "../../../src/features/carsGallery/CarsGallerySlices";
import CarCard from "../carsCard/CarsCard";
import Filters from "../filters/CarsFilters";
import Pagination from "../paginations/Paginations";

// const CarGallery = () => {
//   const [newCarInput, setNewCarInput] = useState({ brand: '', model: '', year: '', price: '' });
//   const filterBrand = useSelector((state) => state.carGallery.filterBrand);
//   const filterModel = useSelector((state) => state.carGallery.filterModel);
//   const filterPrice = useSelector((state) => state.carGallery.filterPrice);
//   const page = useSelector((state) => state.carGallery.page);
//   const newCar = useSelector((state) => state.carGallery.newCar);
 
//   const allCars = useSelector((state) => state.carGallery.allCars);
//   const carsPerPage = useSelector((state) => state.carGallery.carsPerPage);
//   const dispatch = useDispatch();
  
  

//   // useEffect(() => {
//   //   if (newCar) {
//   //     dispatch(addCar(newCarInput));
//   //     dispatch(setNewCar(false)); 
//   //     setNewCarInput({ brand: '', model: '', price: '', year:'' ,});
//   //   }
//   // }, [newCar, dispatch, newCarInput]);

//   useEffect(() => {
//     if (newCar) {
//       dispatch(addCar(newCarInput));
//       dispatch(setNewCar(false)); 
//       setNewCarInput({ brand: '', model: '', price: '', year:'' }); // Обновляем newCarInput после добавления нового автомобиля
//     }
//   }, [newCar, dispatch, newCarInput]);

//   const filterCars = (cars) => {
//     return cars.filter((car) => {
//       const brandMatch = filterBrand === "" || car.brand === filterBrand;
//       const modelMatch = filterModel === "" || (car.model && car.model.toLowerCase().includes(filterModel.toLowerCase()));
//       const priceMatch = filterPrice === "" || (car.price <= parseFloat(filterPrice));
  
//       return brandMatch && modelMatch && priceMatch;
//     });
//   };

//   const handleFilterBrandChange = (brand) => {
//     dispatch(setFilterBrand(brand));
//   };
  
//   const handleFilterModelChange = (model) => {
//     dispatch(setFilterModel(model));
//   };
  
//   const handleFilterPriceChange = (price) => {
//     dispatch(setFilterPrice(price));
//   };
  
 

// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setNewCarInput({ ...newCarInput, [name]: value });
// };


// // const handleAddCar = () => {
// //   const action = addCar(newCarInput);
// //   dispatch(action);
// //   setNewCarInput({ brand: '', model: '', year: '', price: '' });
// // };

// const handleAddCar = () => {
//   dispatch(addCar(newCarInput));
//   dispatch(setNewCar(false));
//   setNewCarInput({ brand: '', model: '', year: '', price: '' });
// };


//   const handlePageChange = (pageNumber) => {
//     dispatch(setPage(pageNumber, handleAddCar()));
//   };
  

//   const paginatedCars = filterCars(allCars)
//     .slice((page - 1) * carsPerPage, page * carsPerPage);

//   return (
//     <div className={style.wrapper}>
//       <Filters
//           filterModel={filterModel}
//           filterPrice={filterPrice}
//           onFilterBrandChange={handleFilterBrandChange}
//           onFilterModelChange={handleFilterModelChange}
//           onFilterPriceChange={handleFilterPriceChange}
//         />

//       <div className={style.car_cards}>
//         {paginatedCars.map((car) => (
//           <CarCard key={car.id} car={car} />
//         ))}
//       </div>

//       <Pagination
//         currentPage={page}
//         totalPages={Math.ceil(filterCars(allCars).length / carsPerPage)}
//         onPageChange={handlePageChange}
//       />

// <div className={style.carForm}>
//         <div className={style.form}>
//         <h2>Add a New Car</h2>

//         <input
//           type="text"
//           name="brand"
//           placeholder="Brand"
//           value={newCarInput.brand}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="model"
//           placeholder="Model"
//           value={newCarInput.model}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="year"
//           placeholder="Year"
//           value={newCarInput.year}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="price"
//           placeholder="price"
//           value={newCarInput.price}
//           onChange={handleInputChange}
//         />
//         <div className={style.btn}>

//         <button onClick={handleAddCar}>Add Car</button>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarGallery;
const CarGallery = () => {
  const [newCarInput, setNewCarInput] = useState({ brand: '', model: '', year: '', price: '' });
  const filterBrand = useSelector((state) => state.carGallery.filterBrand);
  const filterModel = useSelector((state) => state.carGallery.filterModel);
  const filterPrice = useSelector((state) => state.carGallery.filterPrice);
  const page = useSelector((state) => state.carGallery.page);
  const newCar = useSelector((state) => state.carGallery.newCar);
 
  const allCars = useSelector((state) => state.carGallery.allCars);
  const carsPerPage = useSelector((state) => state.carGallery.carsPerPage);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (newCar) {
      dispatch(addCar(newCarInput));
      dispatch(setNewCar(false)); 
      setNewCarInput({ brand: '', model: '', price: '', year:'' });
    }
  }, [newCar, dispatch, newCarInput]);



  const filterCars = (cars) => {
    return cars.filter((car) => {
      const brandMatch = filterBrand === "" || car.brand === filterBrand;
      const modelMatch = filterModel === "" || (car.model && car.model.toLowerCase().includes(filterModel.toLowerCase()));
      const priceMatch = filterPrice === "" || (car.price <= parseFloat(filterPrice));
  
      return brandMatch && modelMatch && priceMatch;
    });
  };

  const handleFilterBrandChange = (brand) => {
    dispatch(setFilterBrand(brand));
  };
  
  const handleFilterModelChange = (model) => {
    dispatch(setFilterModel(model));
  };
  
  const handleFilterPriceChange = (price) => {
    dispatch(setFilterPrice(price));
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCarInput({ ...newCarInput, [name]: value });
  };

  const handleAddCar = () => {
    dispatch(setNewCar(newCarInput)); // Передаем newCarInput в диспетчер
  };

  const handlePageChange = (pageNumber) => {
    dispatch(setPage(pageNumber));
  };

  const paginatedCars = filterCars(allCars)
    .slice((page - 1) * carsPerPage, page * carsPerPage);

  return (
    <div className={style.wrapper}>
      <Filters
          filterModel={filterModel}
          filterPrice={filterPrice}
          onFilterBrandChange={handleFilterBrandChange}
          onFilterModelChange={handleFilterModelChange}
          onFilterPriceChange={handleFilterPriceChange}
      />

      <div className={style.car_cards}>
        {paginatedCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={Math.ceil(filterCars(allCars).length / carsPerPage)}
        onPageChange={handlePageChange}
      />

      <div className={style.carForm}>
        <div className={style.form}>
          <h2>Add a New Car</h2>
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={newCarInput.brand}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={newCarInput.model}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={newCarInput.year}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={newCarInput.price}
            onChange={handleInputChange}
          />
          <div className={style.btn}>
            <button onClick={handleAddCar}>Add Car</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarGallery;
