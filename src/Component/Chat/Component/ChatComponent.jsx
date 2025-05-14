import { TextField, IconButton, Button, Box } from "@mui/material";
import { FaPaperPlane, FaImage, FaMicrophone } from "react-icons/fa";

export default function ComponentChat() {
  const newMessage = "";
  const setNewMessage = () => {};
  const handleSendMessage = () => {};
  const handleImageUpload = () => {};
  const startRecording = () => {};
  const recording = false;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Stack vertically on mobile, horizontally on larger screens
        alignItems: "center",
        gap: 1,
        p: 2,
        borderTop: "1px solid #e0e0e0",
        width: "100%",
      }}
    >
      {/* Input field for typing a message */}
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        placeholder="Type your message..."
        value={newMessage} // Controlled input value
        onChange={(e) => setNewMessage(e.target.value)} // Update the message state
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            "& fieldset": {
              border: "none",
            },
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          width: "100%",
          mt: { xs: 2, sm: 0 }, // Add margin on top for mobile
        }}
      >
        {/* Image upload button */}
        <label>
          <IconButton component="span">
            <FaImage />
          </IconButton>
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload} // Handle image upload
          />
        </label>

        {/* Voice recording button */}
        <IconButton
          onClick={startRecording} // Start recording when clicked
          sx={{ color: recording ? "red" : "inherit" }} // Change color if recording
        >
          <FaMicrophone />
        </IconButton>

        {/* Send button */}
        <Button
          variant="contained"
          onClick={handleSendMessage} // Handle sending the message
          startIcon={<FaPaperPlane />}
          sx={{
            backgroundColor: "#76ab2f",
            "&:hover": {
              backgroundColor: "#5a8f24",
            },
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}