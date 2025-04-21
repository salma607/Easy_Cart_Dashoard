import { useEffect, useState } from "react";
import {
  Tabs,
  Tab,
  IconButton,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../reduex/services/ProductServices/CateogryService";

export default function CategoriesTable() {
  const { Categories: ReduxCategories } = useSelector((state) => state.category);
  const [Categories, setCategories] = useState([]); // Local state for categories
  const [tabIndex, setTabIndex] = useState(0);
  const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Snackbar for success message
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Dynamic message for Snackbar
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  useEffect(() => {
    setCategories(ReduxCategories); // Sync Redux state with local state
  }, [ReduxCategories]);

  const handleCategoryDialogOpen = () => {
    setCategoryDialogOpen(true);
  };

  const handleCategoryDialogClose = () => {
    setCategoryDialogOpen(false);
    setNewCategory(""); // Reset the input field when the dialog is closed
  };

  const handleAddCategory = async () => {
    if (!newCategory.trim()) {
      alert("Category name cannot be empty.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://shehab123.pythonanywhere.com/product/categories/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ CategoryName: newCategory }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Category added successfully:", data);
        setCategories([...Categories, data]); // Update local state with the new category
        handleCategoryDialogClose(); // Close the dialog
        setSnackbarMessage(`Category "${newCategory}" added successfully`); // Set success message
        setSnackbarOpen(true); // Show success message
      } else {
        console.error("Failed to add category:", response.statusText);
        alert("Failed to add category. Please try again.");
      }
    } catch (error) {
      console.error("Error while adding the category:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleDeleteCategory = async () => {
    if (!Categories.length) {
      setSnackbarMessage("The category list is empty."); // Show empty message
      setSnackbarOpen(true); // Open Snackbar
      return; // Do not proceed further
    }

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://shehab123.pythonanywhere.com/product/categories/${Categories[tabIndex].CategoryName}/`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const deletedCategoryName = Categories[tabIndex].CategoryName;
        console.log("Category deleted successfully");
        setCategories(
          Categories.filter(
            (category) => category.CategoryName !== deletedCategoryName
          )
        ); // Update local state without the deleted category
        setSnackbarMessage(`Category "${deletedCategoryName}" deleted successfully`); // Set success message
        setSnackbarOpen(true); // Show success message
      } else {
        console.log("Failed to delete category:", response.statusText);
        alert("Failed to delete category. Please try again.");
      }
    } catch (error) {
      console.error("Error while deleting the category:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const IconButtonSx = {
    color: "#76ab2f",
    "&:hover": {
      color: "#76ab2f",
      backgroundColor: "#f7fee7",
      borderRadius: "8px",
    },
  };

  const ButtonSx = {
    color: "#76ab2f",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#f6fafd",
    },
  };

  const textFieldSx = {
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
  };

  const TabSx = {
    "&:hover": {
      backgroundColor: "#f7fee7",
      borderRadius: "8px",
      color: "#76ab2f",
    },
    "&.Mui-selected": {
      color: "#4caf50",
    },
  };

  return (
    <div>
      {/* Category Tabs and Add/Delete Category Buttons */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Tabs
          value={tabIndex}
          onChange={(event, newValue) => setTabIndex(newValue)}
          aria-label="product categories"
          TabIndicatorProps={{ style: { display: "none" } }}
        >
          {Categories.map((category, index) => (
            <Tab key={index} label={category.CategoryName} sx={TabSx} />
          ))}
        </Tabs>
        <Box display="flex" alignItems="center">
          <IconButton sx={IconButtonSx} onClick={handleCategoryDialogOpen}>
            <AddIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton sx={IconButtonSx} onClick={handleDeleteCategory}>
            <DeleteIcon sx={{ fontSize: 25 }} />
          </IconButton>
        </Box>
      </Box>

      {/* Add Category Dialog */}
      <Dialog open={categoryDialogOpen} onClose={handleCategoryDialogClose}>
        <DialogTitle>Add New Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Category Name"
            fullWidth={true}
            variant="outlined"
            color="##e0e0e0"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            sx={textFieldSx}
          />
        </DialogContent>
        <DialogActions>
          <Button sx={ButtonSx} onClick={handleCategoryDialogClose}>
            Cancel
          </Button>
          <Button sx={ButtonSx} onClick={handleAddCategory}>
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for Success or Empty Message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}