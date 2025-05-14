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
import { useEffect } from "react";
import { loginUser } from "../../../redux/services/AuthService";
import foodImage from "/src/assets/food.png"; // Import the image here

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) return;
    dispatch(loginUser({ username, password }));
    navigate("/Home");
  };
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="p-8 bg-[#7fb833]">
      <div className="grid lg:grid-cols-2 grid-cols-1 shadow-lg">
        <div className="w-full">
          <img src={foodImage} className="w-full" alt="Food" /> {/* Use the imported image */}
        </div>
        <div className="bg-white w-full flex flex-col justify-center items-center rounded-r-lg">
          <div>
            <ShoppingCartIcon sx={{ fontSize: 140, color: "#76ab2f" }} />
          </div>
          <div className="lg:text-[90px] text-[40px] font-bold text-[#000000]">
            <h1 className="text-3xl font-bold justify-center items-center m-5">
              Sign in to your account
            </h1>
          </div>
          <div className="rest-data w-full space-y-3 flex flex-col justify-center items-center">
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="rest-data space-y-6 flex flex-col justify-center items-center">
                <TextField
                  id="outlined-username"
                  label="Username"
                  name="username"
                  variant="outlined"
                  color="#e0e0e0"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#e0e0e0",
                      },
                      "&:hover fieldset": {
                        borderColor: "#76ab2f",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#76ab2f",
                      },
                    },
                    width: "400px",
                  }}
                />

                <FormControl
                  variant="outlined"
                  color="#e0e0e0"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#e0e0e0",
                      },
                      "&:hover fieldset": {
                        borderColor: "#76ab2f",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#76ab2f",
                      },
                    },
                    width: "400px",
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
                  sx={{ width: "50%", backgroundColor: "#76ab2f" }}
                >
                  {isLoading ? "loading..." : "Login"}
                </Button>
                {error && <p>{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}