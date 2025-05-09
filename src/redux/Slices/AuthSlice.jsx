import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../services/AuthService";



const initialState = {
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    isLoading: false,
    error: null,
};

const loginSlice = createSlice({
    name: "loginslice",
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem("token");//don't need to make sign in if we open new tab
            state.token = null;
            state.isAuthenticated = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload;
                localStorage.setItem("token", action.payload.access); // ✅ store token
                state.isAuthenticated = true;
              })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                console.log(action.payload);
                
            });
    }
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;