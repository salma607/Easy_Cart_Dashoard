/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import { AlignJustify } from "lucide-react";

export default function Logo() {
  return (
    <div className="p-20 bg-[#7fb833]">
      <div className=" grid lg:grid-cols-2 grid-cols-1 shadow-lg ">
        <div className="w-full  ">
          <img src="/src/assets/food.png" className=" w-full" />
        </div>
        <div className="bg-white w-full flex flex-col justify-center items-center ">
          <div className="  lg:text-[90px] text-[40px] font-bold text-[#7fb833]">
            <h1>Easy </h1>
            <h1 className=" text-[#066839]">Cart</h1>
          </div>
          <div className=" rest-data w-full space-y-3 flex flex-col justify-center items-center">
            <Button
              a
              href="/login"
              variant="contained"
              disableElevation
              sx={{
                width: "30%",
                bgcolor: "#046a38",
                flex: 1,
                justifyContent: "center",
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
