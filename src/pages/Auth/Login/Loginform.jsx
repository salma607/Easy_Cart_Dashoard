import { Button, TextField } from "@mui/material";
import loginImage from "../../../assets/food.png";
export default function Loginform() {
  return (
   <div className="p-5 bg-lime-400 h-dvh">
     <section className="home-section py-0 card border-2 shadow-xl mt-2 mb-2 bg-white rounded-lg ">
      <div className="mx-auto flex flex-col lg:flex-row items-center justify-between   ">
        <div className="text-section flex-1 lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl font-bold mb-4 ml-24">Sign in to your account</h1>
          <form className="signup-form space-y-3">
            <div className="rest-data w-full space-y-3 flex flex-col justify-center items-center">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{ width: "75%" }}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                sx={{ width: "75%" }}
              />
              <Button a href="/"
                variant="contained"
                color="success"
                disableElevation
                sx={{ width: "75%" }}
              >
                Login
              </Button>
            </div>
          </form>
        </div>
        <div className="hidden lg:flex image-section mt-10 flex-1">
          <img src={loginImage} alt="Landing Image" className="rounded-sm" />
        </div>
      </div>
    </section>
   </div>
  );
}
