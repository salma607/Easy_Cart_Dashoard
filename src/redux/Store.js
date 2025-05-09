import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slices/ProductSlice";
import CategorySlice from "./Slices/CateogrySlice";
import AuthSlice from "./Slices/AuthSlice";

const store = configureStore({
  reducer: {
    product: ProductSlice,
    category: CategorySlice,
    auth: AuthSlice,
    
  },
});
export default store;
