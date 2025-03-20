import { Container, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import GroupIcon from '@mui/icons-material/Group';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Sidebar from "../../Component/Sidebar/Side";
import Header from "../../Component/Header/Header";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import { Link } from 'react-router-dom';

export default function Setting() {

  return (
    <div className="flex h-screen"> 
      <div>
        <Sidebar />
      </div>
      <div className="w-full flex flex-col">
        <Header/>
        <Container className="settings-page flex justify-center items-center h-full"> 
          <Box className="bg-white p-10 rounded-lg shadow-lg text-center w-[80%]">
            <List component="nav" className="grid grid-cols-2 gap-10">
              <Link to='/privacy'>
                <ListItem className="bg-gray-100 hover:bg-[#f7fee7] rounded-lg p-8 flex items-center h-[80px]">
                  <ListItemIcon>
                    <PrivacyTipIcon sx={{ fontSize: 40, color: "#76ab2f" }} />
                  </ListItemIcon>
                  <ListItemText primary="Privacy" primaryTypographyProps={{ variant: 'h6', className: 'text-inherit' }} />
                </ListItem>
              </Link>
              <Link to='/users'>
                <ListItem className="bg-gray-100 hover:bg-[#f7fee7] rounded-lg p-8 flex items-center h-[80px]">
                  <ListItemIcon>
                    <GroupIcon sx={{ fontSize: 40, color: "#76ab2f" }} />
                  </ListItemIcon>
                  <ListItemText primary="Users" primaryTypographyProps={{ variant: 'h6', className: 'text-inherit' }} />
                </ListItem>
              </Link>
              <Link to='/help'>
                <ListItem className="bg-gray-100 hover:bg-[#f7fee7] rounded-lg p-8 flex items-center h-[80px]">
                  <ListItemIcon>
                    <HelpOutlineIcon sx={{ fontSize: 40, color: "#76ab2f" }} />
                  </ListItemIcon>
                  <ListItemText primary="Help Center" primaryTypographyProps={{ variant: 'h6', className: 'text-inherit' }} />
                </ListItem>
              </Link>
              <Link to='/rates'>
                <ListItem className="bg-gray-100 hover:bg-[#f7fee7] rounded-lg p-8 flex items-center h-[80px]">
                  <ListItemIcon>
                    <TrendingUpRoundedIcon sx={{ fontSize: 40, color: "#76ab2f" }} />
                  </ListItemIcon>
                  <ListItemText primary="Rates" primaryTypographyProps={{ variant: 'h6', className: 'text-inherit' }} />
                </ListItem>
              </Link>
              <Link to='/feedback'>
                <ListItem className="bg-gray-100 hover:bg-[#f7fee7] rounded-lg p-8 flex items-center h-[80px]">
                  <ListItemIcon>
                    <TextsmsOutlinedIcon sx={{ fontSize: 40, color: "#76ab2f" }} />
                  </ListItemIcon>
                  <ListItemText primary="Feedback" primaryTypographyProps={{ variant: 'h6', className: 'text-inherit' }} />
                </ListItem>
              </Link>
              <Link to='/clients'>
                <ListItem className="bg-gray-100 hover:bg-[#f7fee7] rounded-lg p-8 flex items-center h-[80px]">
                  <ListItemIcon>
                    <PeopleAltRoundedIcon sx={{ fontSize: 40, color: "#76ab2f" }} />
                  </ListItemIcon>
                  <ListItemText primary="Clients" primaryTypographyProps={{ variant: 'h6', className: 'text-inherit' }} />
                </ListItem>
              </Link>
            </List>
          </Box>
        </Container>
      </div>
    </div>
  );
}