import { useState, useEffect, useRef } from "react";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Button from "@mui/material/Button";
import { InputBase, Link, Avatar } from "@mui/material";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuRef = useRef(null);
  const [searchActive, setSearchActive] = useState(false);

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
    <div className="flex flex-row justify-between items-center p-5">
      <div className="flex-grow flex justify-center">
        <InputBase
          sx={{
            width: "50%",
            maxWidth: 300,
            border: searchActive ? "1px solid #76ab2f" : "1px solid #ccc",
            borderRadius: 1,
            paddingLeft: 2,
            paddingRight: 2,
            transition: "border 0.3s",
          }}
          placeholder="Search"
          startAdornment={<SearchIcon sx={{ marginRight: 1, color: "#76ab2f",fontSize: 20 }} />}
          onFocus={() => setSearchActive(true)}
          onBlur={() => setSearchActive(false)}
        />
      </div>
      <div className="flex">
        <Button
          sx={{
            color: "#76ab2f",
            ":hover": { bgcolor: "#f7fee7", color: "#76ab2f" },
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
          <MenuItem onClick={handleClose} sx={{ fontWeight: '300'}}>
            <Link
              href="/notifications"
              sx={{
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
            color: "#76ab2f",
            ":hover": { bgcolor: "#f7fee7", color: "#76ab2f" },
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
            <MenuItem>
              <Link
                href="http://localhost:5173/Login"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Logout
              </Link>
            </MenuItem>
          </Menu>
        </Dropdown>
      </div>
    </div>
  );
}