import { useState } from "react";
import {
  Button,
  TextField,
  IconButton,
  InputLabel,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import foodImage from "/src/assets/food.png"; // Import the image here
import { loginUser } from "../../../redux/services/AuthService";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Accessing Redux state
  const { isLoading, error } = useSelector((state) => state.auth);

  // Local state for form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Toggle password visibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!username || !password) return;

    // Dispatch the login service
    dispatch(loginUser({ username, password }));

    // Check if the token exists in local storage and redirect
    if (localStorage.getItem("token")) {
      navigate("/Home");
    }
  };

  return (
    <div className="p-8 sm:p-4 bg-[#7fb833] min-h-screen flex items-center justify-center">
      <div className="grid lg:grid-cols-2 grid-cols-1 shadow-xl rounded-lg overflow-hidden w-full max-w-6xl bg-white">
        {/* Image Section */}
        <div className="hidden lg:block">
          <img
            src={foodImage}
            className="w-full h-full object-cover"
            alt="Food"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-center items-center p-8 sm:p-4 w-full">
          <div>
            <ShoppingCartIcon
              sx={{ fontSize: { xs: 80, lg: 140 }, color: "#76ab2f" }}
            />
          </div>
          <h1 className="text-xl sm:text-lg lg:text-3xl font-bold text-center text-black mt-4">
            Sign in to your account
          </h1>
          <form
            className="w-full max-w-md flex flex-col space-y-6 mt-8"
            onSubmit={handleSubmit}
          >
            {/* Username Field */}
            <TextField
              id="outlined-username"
              label="Username"
              name="username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#e0e0e0" },
                  "&:hover fieldset": { borderColor: "#76ab2f" },
                  "&.Mui-focused fieldset": { borderColor: "#76ab2f" },
                },
              }}
              className="w-full"
            />

            {/* Password Field */}
            <FormControl
              variant="outlined"
              className="w-full"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#e0e0e0" },
                  "&:hover fieldset": { borderColor: "#76ab2f" },
                  "&.Mui-focused fieldset": { borderColor: "#76ab2f" },
                },
              }}
            >
              <InputLabel htmlFor="outlined-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                }
                label="Password"
              />
            </FormControl>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              disableElevation
              sx={{
                backgroundColor: "#76ab2f",
                "&:hover": { backgroundColor: "#679f2b" },
              }}
              className="w-full"
            >
              {isLoading ? "Loading..." : "Login"}
            </Button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}