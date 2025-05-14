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
    <div className="p-8 sm:p-4 bg-[#7fb833]">
      <div className="grid lg:grid-cols-2 grid-cols-1 shadow-lg">
        <div className="w-full">
          <img
            src={foodImage}
            className="w-full h-auto object-cover"
            alt="Food"
          /> {/* Responsive image */}
        </div>
        <div className="bg-white w-full flex flex-col justify-center items-center p-8 sm:p-4">
          <div>
            <ShoppingCartIcon
              sx={{ fontSize: { xs: 80, lg: 140 }, color: "#76ab2f" }}
            />
          </div>
          <div className="lg:text-[90px] text-[40px] sm:text-[30px] font-bold text-[#000000] text-center">
            <h1 className="text-3xl sm:text-lg font-bold justify-center items-center m-5">
              Sign in to your account
            </h1>
          </div>
          <div className="rest-data w-full space-y-3 flex flex-col justify-center items-center">
            <form className="signup-form w-full" onSubmit={handleSubmit}>
              <div className="rest-data space-y-6 flex flex-col justify-center items-center w-full">
                <TextField
                  id="outlined-username"
                  label="Username"
                  name="username"
                  variant="outlined"
                  color="#e0e0e0"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "#e0e0e0" },
                      "&:hover fieldset": { borderColor: "#76ab2f" },
                      "&.Mui-focused fieldset": { borderColor: "#76ab2f" },
                    },
                  }}
                  className="max-w-md w-full" /* Medium width */
                />

                <FormControl
                  variant="outlined"
                  color="#e0e0e0"
                  className="max-w-md w-full" /* Medium width */
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

                <Button
                  type="submit"
                  variant="contained"
                  disableElevation
                  sx={{ backgroundColor: "#76ab2f" }}
                  className="max-w-md w-full" /* Medium width */
                >
                  {isLoading ? "Loading..." : "Login"}
                </Button>
                {error && <p className="text-red-500">{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}