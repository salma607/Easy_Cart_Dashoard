import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../services/ProductServices/ProductService";

const ProductSlice = createSlice({
    name: "Product",
    initialState: {
        loading: false,
        error: null,
       Products: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.Products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});
export default ProductSlice.reducer;