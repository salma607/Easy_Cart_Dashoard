import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slices/ProductSlice";

const store = configureStore({
    reducer: {
      product: ProductSlice
    }
});
export default store;