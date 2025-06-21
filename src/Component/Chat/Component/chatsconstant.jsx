// constants.js
export const sxStyles = {
  container: {
    backgroundColor: "#fff",
    borderRight: "1px solid #e0e0e0",
    height: "100vh",
    overflowY: "auto",
  },
  Textfield: {
    mb: 2,
    bgcolor: "grey.100",
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      "& fieldset": {
        border: "none",
      },
    },
  },
  chatListItem: {
    borderRadius: "8px",
    transition: "background 0.2s",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
    mb: 1,
    px: 1,
  },
  chatListItemSelected: {
    backgroundColor: "#e8f5e9",
  },
  chatListItemText: {
    fontWeight: "bold",
    fontSize: "1.1rem",
    letterSpacing: "0.02em",
  },
  unreadIndicator: {
    backgroundColor: "#76ab2f",
    width: 10,
    height: 10,
    borderRadius: "50%",
  },
  fixedHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    pb: 2,
    borderBottom: "1px solid #ececec",
    mb: 2,
  },
  chatWindow: {
    flex: 1,
    overflowY: "auto",
    mb: 2,
    px: 2,
    background: "#f7f7f7",
    borderRadius: "8px",
    minHeight: 0,
  },
  noMessagesText: {
    color: "grey.400",
    textAlign: "center",
    mt: 3,
  },
};

export const initialChats = [
  {
    id: "Easycart001",
    message: "Hello! How can I help you today?",
    unread: true,
  },
  {
    id: "Easycart002",
    message: "Hi there! Need assistance?",
    unread: true,
  },
  {
    id: "Easycart003",
    message: "Your order has been shipped.",
    unread: false,
  },
  {
    id: "Easycart004",
    message: "Don't miss our summer sale!",
    unread: true,
  },
  {
    id: "Easycart005",
    message: "Thank you for your feedback.",
    unread: false,
  },
  {
    id: "Easycart006",
    message: "Your payment was successful.",
    unread: false,
  },
  {
    id: "Easycart007",
    message: "Please rate our service!",
    unread: true,
  },
  {
    id: "Easycart008",
    message: "Your refund is processed.",
    unread: false,
  },
  {
    id: "Easycart009",
    message: "Welcome to Easycart support.",
    unread: true,
  },
];