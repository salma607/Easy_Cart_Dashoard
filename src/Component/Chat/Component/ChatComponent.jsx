import { useState, useRef } from "react";
import { Box, IconButton, InputBase } from "@mui/material";
import { FaPaperPlane, FaImage, FaMicrophone } from "react-icons/fa";

export default function ComponentChat() {
  const [newMessage, setNewMessage] = useState("");
  const [recording, setRecording] = useState(false);
  const recognitionRef = useRef(null);

  // Handle sending the message
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    alert("Message sent: " + newMessage);
    setNewMessage("");
  };

  // Handle image upload (placeholder)
  const handleImageUpload = () => {
    alert("Image upload not implemented");
  };

  // Voice recording (simplified, see previous code for details)
  const startRecording = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setRecording(true);
    recognition.onend = () => setRecording(false);
    recognition.onerror = (event) => {
      setRecording(false);
      alert("Speech recognition error: " + event.error);
    };
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setNewMessage((prev) => (prev ? prev + " " : "") + transcript);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  // Send on Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f7f7f7",
        padding: "0 0 0 0",
        borderTop: "1px solid #ececec",
        display: "flex",
        alignItems: "center",
        minHeight: 56,
      }}
    >
      {/* Message Input */}
      <InputBase
        placeholder="Type your message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        sx={{
          flex: 1,
          px: 3,
          py: 1.5,
          fontSize: 16,
          background: "transparent",
          border: "none",
          outline: "none",
        }}
        inputProps={{
          style: {
            background: "transparent",
            border: "none",
            outline: "none",
          },
        }}
      />

      {/* Icons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          pr: 3,
        }}
      >
        {/* Image upload button */}
        <label>
          <IconButton component="span" sx={{ color: "#444", p: 1 }}>
            <FaImage />
          </IconButton>
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageUpload}
          />
        </label>

        {/* Voice recording button */}
        <IconButton
          onClick={startRecording}
          sx={{
            color: recording ? "red" : "#222",
            p: 1,
          }}
        >
          <FaMicrophone />
        </IconButton>

        {/* Send icon */}
        <IconButton
          onClick={handleSendMessage}
          sx={{
            color: "#76ab2f",
            p: 1,
          }}
        >
          <FaPaperPlane />
        </IconButton>
      </Box>
    </Box>
  );
}