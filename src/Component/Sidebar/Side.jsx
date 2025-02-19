import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import  { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

export default function sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative h-full">
    <IconButton
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: 10,
            color: "green",
            "&:hover": { color: "#84cc16" },
          }}
          onClick={toggleSidebar}
        >
          <MenuIcon  sx={{ fontSize: 40 }}/>
        </IconButton>
    {isOpen && (
    <div className="w-100 text-stone-950 p-4 border-2 border-lime-500 h-full flex flex-col justify-between items-center">
      <div className="m-5">
        <h2 className="text-4xl mb-6 text-stone-950">Easy Cart Dashboard</h2>
        <ul>
          <div className=" hover:bg-lime-200 rounded-md w-full  ">
            <li className="mb-4">
              <a href="#link1" className=" text-[30px]">
                Link 1
              </a>
            </li>
          </div>
          <div className=" hover:bg-lime-200 rounded-md w-full">
            <li className="mb-4">
              <a href="#link1" className=" text-[30px] ">
                Link 1
              </a>
            </li>
          </div>
          <div className=" hover:bg-lime-200 rounded-md w-full">
            <li className="mb-4">
              <a href="#link1" className=" text-[30px] ">
                Link 1
              </a>
            </li>
          </div>
          <div className=" hover:bg-lime-200 rounded-md w-full">
            <li className="mb-4">
              <a href="#link1" className=" text-[30px] ">
                Link 1
              </a>
            </li>
          </div>
        </ul>
      </div>
      <Button
        variant="outlined"
        sx={{
          borderColor: "#84cc16",
          color: "black",
          borderWidth: "2px",
          "&:hover": { backgroundColor: "#84cc16" },
        }}
        startIcon={<LogoutIcon />}
      >
        Logout
      </Button>
    </div>
    )}
    </div>
  );
}
