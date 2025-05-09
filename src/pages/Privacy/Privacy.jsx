import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Container,
  Avatar,
  IconButton,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import Sidebar from "../../Component/Sidebar/Side";
import Header from "../../Component/Header/Header";
import DotsLoader from "../../Component/DotsLoader/DotsLoader"; // Import DotsLoader

// Constant styles for reusability
const buttonStyles = {
  primary: {
    backgroundColor: '#76ab2f',
    '&:hover': {
      backgroundColor: '#5a8f24',
    },
  },
  submit: {
    backgroundColor: '#76ab2f',
    '&:hover': {
      backgroundColor: '#5a8f24',
    },
    width: '64px',
    marginTop: '16px',
  },
};

const iconButtonStyles = {
  upload: {
    fontSize: 40,
    color: "#76ab2f",
  },
};

const textFieldStyles = {
  fullWidth: true,
  variant: "outlined",
  color: "#e0e0e0",
  sx: {
    "& .MuiOutlinedInput-root": {
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
};

export default function Privacy() {
  const [isEditable, setIsEditable] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    password: "",
    phoneNumber: "",
    email: "",
    address: "",
    postcode: "",
  });

  useEffect(() => {
    // Simulate fetching profile data
    const fetchProfileData = async () => {
      setTimeout(() => {
        setFormData({
          firstName: "Salma",
          secondName: "Ahmed Mohamed",
          password: "$alma12345",
          phoneNumber: "01025011729",
          email: "salma25102001@gmail.com",
          address: "Nasr City",
          postcode: "1123",
        });
        setIsLoading(false); // Set loading to false after fetching data
      }, 2000); // Simulated delay
    };
    fetchProfileData();
  }, []);

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the form data here
    setIsEditable(false);
  };

  if (isLoading) {
    // Show loader while fetching profile data
    return (
      <div className="flex justify-center items-center h-screen">
        <DotsLoader />
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="w-full flex flex-col">
        <Header />
        <Container className="mt-8 p-4 bg-white shadow-md rounded-md">
          <div className="flex justify-between items-center mb-6">
            <Button
              variant="contained"
              size="small"
              onClick={handleEditClick}
              sx={buttonStyles.primary}
            >
              Edit
            </Button>
          </div>
          <div className="flex flex-col items-center mb-6 relative">
            <Avatar
              src={profilePicture}
              alt="Profile Picture"
              className="w-40 h-40 mb-2" // Adjust the size here
            />
            <input
              accept="image/*"
              className="hidden"
              id="icon-button-file"
              type="file"
              onChange={handleProfilePictureChange}
              disabled={!isEditable}
            />
            <label
              htmlFor="icon-button-file"
              className="absolute top-0 right-0"
            >
              <IconButton
                aria-label="upload picture"
                component="span"
                size="small"
                disabled={!isEditable}
                className="rounded-full"
                sx={iconButtonStyles.upload}
              >
                <Add />
              </IconButton>
            </label>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              disabled={!isEditable}
              {...textFieldStyles}
            />
            <TextField
              label="Second Name"
              name="secondName"
              value={formData.secondName}
              onChange={handleInputChange}
              disabled={!isEditable}
              {...textFieldStyles}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              disabled={!isEditable}
              {...textFieldStyles}
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              disabled={!isEditable}
              {...textFieldStyles}
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={!isEditable}
              {...textFieldStyles}
            />
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              disabled={!isEditable}
              {...textFieldStyles}
            />
            <TextField
              label="Postcode"
              name="postcode"
              value={formData.postcode}
              onChange={handleInputChange}
              disabled={!isEditable}
              {...textFieldStyles}
            />
            <Button
              variant="contained"
              type="submit"
              disabled={!isEditable}
              size="small"
              sx={buttonStyles.submit}
            >
              Submit
            </Button>
          </form>
        </Container>
      </div>
    </div>
  );
}