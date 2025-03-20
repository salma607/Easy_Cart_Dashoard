import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASEURL}/api/auth/login`,
                {
                    email,
                    password,
                    phoneNumber: "+201234567890", // Static value
                    appType: "provider",
                    fcmToken: "fcmToken",
                }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Login failed");
        }
    }
);