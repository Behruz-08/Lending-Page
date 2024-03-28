

import { createSlice } from "@reduxjs/toolkit";
import carsData from "../../components/carsData/CarsData";

const initialState = {
  filterBrand: "",
  filterModel: "", 
  filterPrice: "", 
  page: 1,
  newCar: { brand: "", model: "", year: "", price: "" },
  allCars: carsData,
  carsPerPage: 27,
};

const carGallerySlice = createSlice({
  name: "carGallery",
  initialState,
  reducers: {
    setFilterBrand(state, action) {
      state.filterBrand = action.payload;
      state.carsPerPage = action.payload === "" ? 27 : 9;
      state.page = 1;
    },
    setFilterModel(state, action) { 
      state.filterModel = action.payload;
      state.page = 1;
    },
    setFilterPrice(state, action) { 
      state.filterPrice = action.payload;
      state.page = 1;
    },
    setPage(state, action) {
      state.page = action.payload;
      state.page = 1;
    },
    setNewCar(state, action) {
      state.newCar = action.payload;
      state.page = 1;
    },
  

  addCar(state, action) {
    const newCarWithId = { ...action.payload, id: Date.now() };
    
    // Проверяем, определен ли state.allCars и является ли он массивом
    if (Array.isArray(state.allCars)) {
      // Если да, добавляем новый автомобиль
      state.allCars.push(newCarWithId);
      // Устанавливаем новый автомобиль
      state.newCar = newCarWithId;
    } else {
      // Если нет, инициализируем allCars как массив и добавляем новый автомобиль
      state.allCars = [newCarWithId];
      // Устанавливаем новый автомобиль
      state.newCar = newCarWithId;
    }
  },
  

   },
});


export const {
  setFilterBrand,
  setFilterModel, 
  setFilterPrice, 
  setNewCar,
  addCar,
  setPage
} = carGallerySlice.actions;

export default carGallerySlice.reducer;