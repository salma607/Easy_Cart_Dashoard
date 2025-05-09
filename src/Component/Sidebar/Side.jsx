import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalMallIcon from "@mui/icons-material/LocalMall";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate(); // Hook for navigation

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar Toggle Button */}
      <IconButton
        sx={{
          position: "absolute",
          top: "10px",
          left: "15px",
          zIndex: 10,
          color: "#f7fee7",
        }}
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <CloseIcon sx={{ fontSize: 40,color:"#76ab2f" }} /> // Close Icon when sidebar is open
        ) : (
          <MenuIcon sx={{ fontSize: 40 }} /> // Menu Icon when sidebar is closed
        )}
      </IconButton>

      {/* Sidebar */}
      {isOpen && (
        <div ref={sidebarRef} className="w-100 text-stone-950 p-4 border-2 border-stone-200 h-full">
          <div className="m-5 w-80">
            <h2 className="text-[45px] mb-8 text-[#76ab2f] mt-8 font-semibold">
              Easy Cart
            </h2>
            <div>
              <List>
                {/* Dashboard */}
                <ListItem
                  button
                  sx={{ "&:hover": { borderRadius: "8px", backgroundColor: "#f7fee7" } }}
                  onClick={() => navigate("/Home")}
                >
                  <ListItemIcon>
                    <DashboardIcon sx={{ fontSize: 40, color: "#76ab2f" }} />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" primaryTypographyProps={{ fontSize: 30 }} />
                </ListItem>

                {/* Products */}
                <ListItem
                  button
                  sx={{ "&:hover": { borderRadius: "8px", backgroundColor: "#f7fee7" } }}
                  onClick={() => navigate("/Product")}
                >
                  <ListItemIcon>
                    <ShoppingBasketIcon sx={{ fontSize: 40, color: "#76ab2f" }} />
                  </ListItemIcon>
                  <ListItemText primary="Products" primaryTypographyProps={{ fontSize: 30 }} />
                </ListItem>

                {/* Cart Service */}
                <ListItem
                  button
                  sx={{ "&:hover": { borderRadius: "8px", backgroundColor: "#f7fee7" } }}
                  onClick={() => navigate("/CartService")}
                >
                  <ListItemIcon>
                    <ProductionQuantityLimitsIcon sx={{ fontSize: 40, color: "#76ab2f" }} />
                  </ListItemIcon>
                  <ListItemText primary="Carts service" primaryTypographyProps={{ fontSize: 30 }} />
                </ListItem>

                {/* Orders */}
                <ListItem
                  button
                  sx={{ "&:hover": { borderRadius: "8px", backgroundColor: "#f7fee7" } }}
                  onClick={() => navigate("/Order")}
                >
                  <ListItemIcon>
                    <LocalMallIcon sx={{ fontSize: 40, color: "#76ab2f" }} />
                  </ListItemIcon>
                  <ListItemText primary="Orders" primaryTypographyProps={{ fontSize: 30 }} />
                </ListItem>

                {/* Settings */}
                <ListItem
                  button
                  sx={{ "&:hover": { borderRadius: "8px", backgroundColor: "#f7fee7" } }}
                  onClick={() => navigate("/Setting")}
                >
                  <ListItemIcon>
                    <SettingsIcon sx={{ fontSize: 40, color: "#76ab2f" }} />
                  </ListItemIcon>
                  <ListItemText primary="Setting" primaryTypographyProps={{ fontSize: 30 }} />
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}