export const sxStyles = {
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
      backgroundImage: "url('https://i.pinimg.com/736x/0b/f2/80/0bf280388937448d38392b76c15bd441.jpg')",
      overflow: "auto",
      maxheight:400
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
    Textfield: {
      fullWidth: true,
      variant: "outlined",
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
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
  
  export const initialChats = [
    {
      id: "Easycart001",
      message: "Hello, I have an issue with my cart.",
      unread: true,
      favourite: false,
    },
    {
      id: "Easycart002",
      message: "Hello, I have an issue with my cart.",
      unread: true,
      favourite: false,
    },
    {
      id: "Easycart003",
      message: "Hello, I have an issue with my cart.",
      unread: true,
      favourite: false,
    },
    {
      id: "Easycart004",
      message: "Hello, I have an issue with my cart.",
      unread: false,
      favourite: false,
    },
  ];