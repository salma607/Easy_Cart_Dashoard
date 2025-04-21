import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../services/ProductServices/CateogryService";

const CategorySlice = createSlice({
  name: "Category",
  initialState: {
    loading: false,
    error: null,
    Categories: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.Categories = action.payload;
        console.log(action.payload);
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log(action.payload);
      });
  },
});
export default CategorySlice.reducer;
