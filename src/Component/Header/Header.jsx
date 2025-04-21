import { useState, useEffect, useRef } from "react";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from '@mui/material/Avatar'; // Example for Material-UI Avatar
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Button from "@mui/material/Button";

import { Link, useNavigate } from "react-router-dom"; // Import useNavigate and Link

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate

  const handleNotificationsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const notifications = [
    "Notification 1",
    "Notification 2",
    "Notification 3",
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="flex flex-row justify-between items-center p-5 bg-[#76ab2f] h-20">
      <div className="flex-grow flex justify-center">
      </div>
      <div className="flex ">
        <Button
          sx={{
            color: "#f7fee7",
            
          }}
          onClick={handleNotificationsClick}
        >
          <NotificationsIcon />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          ref={menuRef}
        >
          {notifications.map((notification, index) => (
            <MenuItem
              key={index}
              onClick={handleClose}
              sx={{ fontWeight: '300' }}
            >
              {notification}
            </MenuItem >
          ))}
          <MenuItem onClick={handleClose} sx={{ fontWeight: '300' }}>
            <Link
              to="/notifications"
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              All Notifications
            </Link>
          </MenuItem>
        </Menu>
        <Button
          sx={{
            color: "#f7fee7"
          }}
        >
          <ChatBubbleIcon />
        </Button>
        <Dropdown>
          <MenuButton
            sx={{
              color: "#76ab2f",
              ":hover": { bgcolor: "#f7fee7", color: "#76ab2f" },
              border: "none",
              padding: 0,
            }}
          >
            <Avatar 
              alt="Profile Photo"
              src="https://via.placeholder.com/150"
              sx={{ width: 40, height: 40 }}
            />
          </MenuButton>
          <Menu>
            <MenuItem>Profile</MenuItem>
            <MenuItem
              onClick={() => navigate("/")} // Navigate to /login on click
              sx={{
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Dropdown>
      </div>
    </div>
  );
}