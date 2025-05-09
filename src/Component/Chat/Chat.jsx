import { useState, useEffect } from "react";
import {
  Menu,
  MenuItem,
  TextField,
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { FilterList } from "@mui/icons-material";
import { sxStyles, initialChats } from "../Chat/Component/constants";
import DotsLoader from "../../Component/DotsLoader/DotsLoader"; 
import ComponentChat from "../Chat/Component/ChatComponent";


export default function Chat() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [chatSearchTerm, setChatSearchTerm] = useState("");
  const [anchorElSearch, setAnchorElSearch] = useState(null);
  const [anchorElFilter, setAnchorElFilter] = useState(null);

  // Add states for ComponentChat props
  const [newMessage, setNewMessage] = useState(""); // State for the new message
  const [recording, setRecording] = useState(false); // State for recording status

  useEffect(() => {
    // Simulate fetching chat data
    const fetchChats = async () => {
      setTimeout(() => {
        setChats(initialChats);
        setIsLoading(false); // Set loading to false after fetching chats
      }, 2000); // Simulated delay
    };
    fetchChats();
  }, []);

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

  // Add functions for ComponentChat props
  const handleSendMessage = () => {
    if (newMessage.trim() && selectedChat) {
      // Update the selected chat with the new message
      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === selectedChat.id
            ? { ...chat, message: `${chat.message}\n${newMessage.trim()}` }
            : chat
        )
      );
      setNewMessage(""); // Clear the input field after sending
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Image uploaded:", file); // Replace this with actual upload logic
    }
  };

  const startRecording = () => {
    setRecording(true);
    console.log("Recording started...");
    setTimeout(() => {
      setRecording(false);
      console.log("Recording stopped.");
    }, 5000); // Simulate 5 seconds of recording
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

  if (isLoading) {
    // Show loader while chats are loading
    return (
      <div className="flex justify-center items-center h-screen">
        <DotsLoader />
      </div>
    );
  }

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
                  {chat.unread && (
                    <Box
                      sx={{
                        ...sxStyles.unreadIndicator,
                        backgroundColor: "#76ab2f",
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        marginRight: 1,
                      }}
                    ></Box>
                  )}
                  <Typography sx={sxStyles.chatListItemText}>
                    {chat.id}
                  </Typography>
                </Box>
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
                  ) : line.startsWith("[Audio:") ? (
                    <audio
                      key={index}
                      controls
                      src={line.replace("[Audio: ", "").replace("]", "")}
                      style={{ marginBottom: "8px" }}
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

            {/* Pass props to ComponentChat */}
            <ComponentChat
              newMessage={newMessage}
              setNewMessage={setNewMessage}
              handleSendMessage={handleSendMessage}
              handleImageUpload={handleImageUpload}
              startRecording={startRecording}
              recording={recording}
            />
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