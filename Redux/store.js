import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slices/productSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});