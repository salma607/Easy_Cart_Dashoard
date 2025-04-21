import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    "auth/login",
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `https://shehab123.pythonanywhere.com/worker/login/`,
                {
                    username,
                    password
                }
            );
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Login failed");
        }
    }
);