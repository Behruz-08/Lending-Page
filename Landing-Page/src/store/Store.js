import { configureStore } from "@reduxjs/toolkit";
import carGalleryReducer from "../../src/features/carsGallery/CarsGallerySlices";
import ProductsReducer from "../features/Products/ProductsSlices";

export default configureStore({
  reducer: {
    carGallery: carGalleryReducer,
    products:ProductsReducer
  },
});
