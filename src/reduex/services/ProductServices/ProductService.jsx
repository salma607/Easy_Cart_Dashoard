import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
    '/getallProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://shehab123.pythonanywhere.com/product/getall/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message || "An error had happened, please try again later");
        }
    }
);