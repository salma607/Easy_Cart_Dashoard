import PersonIcon from "@mui/icons-material/Person";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Button from '@mui/material/Button';
import { Input } from "@mui/material";

export default function Header() {
  return (
    
    <div className=" flex flex-row justify-between items-center p-5" >
     
        <div className=" flex-grow flex justify-center ">
      <Input
              sx={{ width: "w-full" }}
              placeholder="Search"
              startAdornment={<SearchIcon />}
            />
            </div>
            
            <div className="flex ">
      
      <Button sx={{color:"green",":hover":{bgcolor:"green",color:"white"}}}>
      <NotificationsIcon></NotificationsIcon>
      </Button>
      <Button sx={{color:"green",":hover":{bgcolor:"green",color:"white"}}}>
      <ChatBubbleIcon></ChatBubbleIcon>
      </Button>

      <Dropdown>
        <MenuButton sx={{color:"green",":hover":{bgcolor:"green",color:"white"},border:"none"}}>
          <PersonIcon></PersonIcon>
        </MenuButton>
        <Menu>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Dropdown>
      
            </div>
      
     
    </div>
       
      );
    }
    
   