import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
    '/getallProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASEURL}/product/getall/`);
          return response.data;
        } catch (error) {
            console.log(error);
            rejectWithValue(error.message || "An error had happened , please try again later");
        }
    }
)