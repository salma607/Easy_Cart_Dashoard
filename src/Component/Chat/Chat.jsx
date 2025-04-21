import { useState } from "react";
import { FaPaperPlane, FaImage, FaSearch } from "react-icons/fa";
import {
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Box,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FilterList } from "@mui/icons-material";

const sxStyles = {
  container: {
    bgcolor: "white",
    border: "3px solid",
    borderColor: "#f7fee7",
    borderRadius: 2,
    p: 2,
    height: "100%",
    overflowY: "auto",
  },
  chatListItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 2,
    borderRadius: 3,
    cursor: "pointer",
    "&:hover": {
      bgcolor: "#f7fee7",
    },
  },
  chatListItemText: {
    fontWeight: 800,
    color: "#76ab2f",
    fontSize: { xs: "16px", sm: "20px", md: "25px" },
  },
  chatListPreview: {
    fontSize: { xs: "12px", sm: "16px", md: "20px" },
    color: "grey.600",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  chatWindow: {
    flex: 1,
    padding: 2,
    bgcolor: "white",
    border: "1px solid",
    borderColor: "#f7fee7",
    overflowY: "auto",
  },
  fixedHeader: {
    bgcolor: "#76ab2f",
    color: "white",
    p: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: 1,
    borderRadius: 1,
    position: "sticky",
    top: 0,
    zIndex: 10,
  },

  inputField: {
    flex: 1,
    borderRadius: 1,
  },
  noMessagesText: {
    color: "grey.500",
    textAlign: "center",
  },
  unreadIndicator: {
    width: 8,
    height: 8,
    bgcolor: "green.500",
    borderRadius: "50%",
  },
  Textfield:{
    margin: 2,
    "& .MuiOutlinedInput-root": {
      borderRadius: 1,
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
    
  },
  typingFooter: {
    position: "sticky",
    bottom: 0,
    bgcolor: "white",
    height: 60,
    p: 2,
    borderTop: "1px solid #f7fee7",
    display: "flex",
    alignItems: "center",
    gap: 1,
    zIndex: 10,
  },
};

export default function Chat() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [chats, setChats] = useState([
    {
      id: "Easycart001",
      message: "Hello, I have an issue with my cart.",
      unread: true,
      favourite: false,
    },
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [image, setImage] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [chatSearchTerm, setChatSearchTerm] = useState("");
  const [anchorElSearch, setAnchorElSearch] = useState(null);
  const [anchorElFilter, setAnchorElFilter] = useState(null);

  const handleSearchMenuOpen = (event) =>
    setAnchorElSearch(event.currentTarget);
  const handleSearchMenuClose = () => setAnchorElSearch(null);
  const handleFilterMenuOpen = (event) =>
    setAnchorElFilter(event.currentTarget);
  const handleFilterMenuClose = () => setAnchorElFilter(null);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setChats((prevChats) =>
      prevChats.map((c) => (c.id === chat.id ? { ...c, unread: false } : c))
    );
    setChatSearchTerm("");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleSendMessage = () => {
    if ((newMessage.trim() || image) && selectedChat) {
      const newContent = image
        ? `${selectedChat.message}\n[Image: ${image}]`
        : `${selectedChat.message}\n${newMessage}`;

      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === selectedChat.id ? { ...chat, message: newContent } : chat
        )
      );
      setNewMessage("");
      setImage(null);
    }
  };

  const filteredChats = chats.filter((chat) => {
    if (filter === "unread" && !chat.unread) return false;
    if (filter === "favourite" && !chat.favourite) return false;
    if (
      searchTerm &&
      !chat.id.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !chat.message.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const filteredMessages = selectedChat
    ? selectedChat.message
        .split("\n")
        .filter((line) =>
          line.toLowerCase().includes(chatSearchTerm.toLowerCase())
        )
    : [];

  return (
    <Grid container sx={{ height: "100vh", bgcolor: "grey.100" }}>
      {!isSmallScreen || !selectedChat ? (
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          sx={sxStyles.container}
          style={{
            display: isSmallScreen && selectedChat ? "none" : "block",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
              sx={sxStyles.Textfield}
            />
            <IconButton onClick={handleFilterMenuOpen}>
              <FilterList />
            </IconButton>
            <Menu
              anchorEl={anchorElFilter}
              open={Boolean(anchorElFilter)}
              onClose={handleFilterMenuClose}
            >
              <MenuItem onClick={() => setFilter("all")}>All</MenuItem>
              <MenuItem onClick={() => setFilter("unread")}>Unread</MenuItem>
              <MenuItem onClick={() => setFilter("favourite")}>
                Favourite
              </MenuItem>
            </Menu>
          </Box>

          <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
            {filteredChats.map((chat) => (
              <Box
                key={chat.id}
                component="li"
                sx={{
                  ...sxStyles.chatListItem,
                  ...(selectedChat?.id === chat.id &&
                    sxStyles.chatListItemSelected),
                }}
                onClick={() => handleChatSelect(chat)}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {chat.unread && <Box sx={sxStyles.unreadIndicator}></Box>}
                  <Typography sx={sxStyles.chatListItemText}>
                    {chat.id}
                  </Typography>
                </Box>
                <Typography sx={sxStyles.chatListPreview}>
                  {chat.message}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      ) : null}

      <Grid
        item
        xs={12}
        sm={8}
        md={9}
        sx={{ display: "flex", flexDirection: "column", p: 2 }}
      >
        {selectedChat ? (
          <>
            <Box sx={sxStyles.fixedHeader}>
              <Typography sx={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                {selectedChat.id}
              </Typography>
              <Box>
                <IconButton onClick={handleSearchMenuOpen}>
                  <FaSearch />
                </IconButton>
                <Menu
                  anchorEl={anchorElSearch}
                  open={Boolean(anchorElSearch)}
                  onClose={handleSearchMenuClose}
                >
                  <Box sx={{ p: 2 }}>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      placeholder="Search in chat..."
                      value={chatSearchTerm}
                      onChange={(e) => setChatSearchTerm(e.target.value)}
                      sx={sxStyles.Textfield}
                    />
                  </Box>
                </Menu>
              </Box>
            </Box>

            <Box sx={sxStyles.chatWindow}>
              {filteredMessages.length > 0 ? (
                filteredMessages.map((line, index) =>
                  line.startsWith("[Image:") ? (
                    <Box
                      component="img"
                      key={index}
                      src={line.replace("[Image: ", "").replace("]", "")}
                      alt="Uploaded content"
                      sx={{
                        mb: 2,
                        borderRadius: 1,
                        boxShadow: 1,
                        maxWidth: "100%",
                      }}
                    />
                  ) : (
                    <Typography key={index} sx={{ color: "grey.700" }}>
                      {line}
                    </Typography>
                  )
                )
              ) : (
                <Typography sx={sxStyles.noMessagesText}>
                  No matching messages
                </Typography>
              )}
            </Box>

            <Box sx={sxStyles.typingFooter}>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    border: "none",
                    "& fieldset": {
                      border: "none",
                    },
                  },
                }}
              />
              <label>
                <FaImage />
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageUpload}
                />
              </label>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSendMessage}
                startIcon={<FaPaperPlane />}
              >
                Send
              </Button>
            </Box>
          </>
        ) : (
          <Typography
            sx={{
              color: "grey.500",
              textAlign: "center",
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Select a chat to start messaging
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}
