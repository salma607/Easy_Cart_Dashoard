import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Box,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import axios from "axios"; // Import axios for API calls

export default function AddProduct({ onProductAdded }) {
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [setOpenFilterDialog] = useState(false); // Fixed destructuring
  const [loading, setLoading] = useState(false); // State to manage loading
  const [error, setError] = useState(""); // State to handle errors

  const [newProduct, setNewProduct] = useState({
    QRNumber: "",
    ProductName: "",
    ProductPrice: "",
    ProductWeight: "",
    ProductWeightUnit: "Kg", // Default unit
    ProductBrand: "",
    ProductPlace: "",
    ProductAvailable: "Yes",
    ProductQuantity: 10,
    ProductCategory: "",
    ProductSupplier: "no",
    ProductDescription: "no",
    ProductBoycott: false,
    ProductTotalRate: "",
    ProductFasting: "no",
  });

  const textFieldSx = {
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

  const ButtonSx = {
    sx: { color: "#76ab2f" },
  };

  const IconSx = {
    color: "#76ab2f",
    "&:hover": {
      color: "#76ab2f",
      backgroundColor: "#f7fee7",
      borderRadius: "8px",
    },
  };

  // Handle API call to add product
  const handleAddProduct = async () => {
    setLoading(true); // Start loading
    setError(""); // Clear any previous errors
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No authentication token found. Please log in.");
        return; // Stop execution if token is missing
      }

      // Log the product data before sending the request
      console.log("Request payload:", newProduct);

      // Make POST request to the online API
      const response = await axios.post(
        "https://shehab123.pythonanywhere.com/product/add/",
        newProduct, // Send as a dictionary (not a list)
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        console.log("Product added successfully:", response.data);

        // Notify the parent component about the new product
        if (onProductAdded) {
          onProductAdded(response.data);
        }

        // Reset form after success
        setNewProduct({
          QRNumber: "",
          ProductName: "",
          ProductPrice: "",
          ProductWeight: "",
          ProductWeightUnit: "Kg", // Reset to default unit
          ProductBrand: "",
          ProductPlace: "",
          ProductAvailable: "Yes",
          ProductQuantity: 10,
          ProductCategory: "",
          ProductSupplier: "no",
          ProductDescription: "no",
          ProductBoycott: false,
          ProductTotalRate: "",
          ProductFasting: "no",
        });

        setOpenAddDialog(false); // Close dialog
      } else {
        setError("Failed to add product. Please try again.");
      }
    } catch (err) {
      console.log("Error adding product:", err.response?.data || err.message);
      setError(
        err.response?.data?.message ||
          "An error occurred while adding the product. Please try again."
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      {/* Add and Filter Buttons */}
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <IconButton
          sx={IconSx}
          onClick={() => setOpenFilterDialog(true)}
          // Fixed attribute usage warnings
          aria-label="Open filter dialog"
        >
          <FilterListIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton
          sx={IconSx}
          onClick={() => setOpenAddDialog(true)}
          aria-label="Open add dialog"
        >
          <AddIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>

      {/* Add Product Dialog */}
      <Dialog open={openAddDialog} onClose={() => setOpenAddDialog(false)}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Product Id"
            value={newProduct.QRNumber}
            onChange={(e) =>
              setNewProduct({ ...newProduct, QRNumber: e.target.value })
            }
            {...textFieldSx}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Product Name"
            value={newProduct.ProductName}
            onChange={(e) =>
              setNewProduct({ ...newProduct, ProductName: e.target.value })
            }
            {...textFieldSx}
          />
          <TextField
            margin="dense"
            label="Product Price"
            type="number"
            value={newProduct.ProductPrice}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                ProductPrice: e.target.value,
              })
            }
            {...textFieldSx}
          />
          <Box display="flex" alignItems="center" gap={2} marginY={1}>
            <TextField
              label="Product Weight"
              type="number"
              value={newProduct.ProductWeight}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  ProductWeight: e.target.value,
                })
              }
              {...textFieldSx}
              sx={{ width: "60%" }}
            />
            <TextField
              select
              label="Unit"
              value={newProduct.ProductWeightUnit}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  ProductWeightUnit: e.target.value,
                })
              }
              sx={{ width: "35%" }}
            >
              <MenuItem value="Kg">Kg</MenuItem>
              <MenuItem value="g">g</MenuItem>
            </TextField>
          </Box>
          <TextField
            margin="dense"
            label="Product Category"
            select
            value={newProduct.ProductCategory}
            onChange={(e) =>
              setNewProduct({ ...newProduct, ProductCategory: e.target.value })
            }
            {...textFieldSx}
          >
            <MenuItem value="Fruits">Fruits</MenuItem>
            <MenuItem value="Vegetables">Vegetables</MenuItem>
            <MenuItem value="Dairy">Dairy</MenuItem>
            <MenuItem value="Meat & Chicken">Meat & Chicken</MenuItem>
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Healthcare">Healthcare</MenuItem>
            <MenuItem value="Bakery">Bakery</MenuItem>
          </TextField>

          <TextField
            margin="dense"
            label="Product Brand"
            value={newProduct.ProductBrand}
            onChange={(e) =>
              setNewProduct({ ...newProduct, ProductBrand: e.target.value })
            }
            {...textFieldSx}
          />
          <TextField
            margin="dense"
            label="Product Rate"
            value={newProduct.ProductTotalRate}
            onChange={(e) =>
              setNewProduct({ ...newProduct, ProductTotalRate: e.target.value })
            }
            {...textFieldSx}
          />
          <TextField
            margin="dense"
            label="Product place"
            value={newProduct.ProductPlace}
            onChange={(e) =>
              setNewProduct({ ...newProduct, ProductPlace: e.target.value })
            }
            {...textFieldSx}
          />
          <TextField
            margin="dense"
            label="Product Available"
            select
            value={newProduct.ProductAvailable}
            onChange={(e) =>
              setNewProduct({ ...newProduct, ProductAvailable: e.target.value })
            }
            {...textFieldSx}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
          {/* Display error if exists */}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddDialog(false)} {...ButtonSx}>
            Cancel
          </Button>
          <Button onClick={handleAddProduct} {...ButtonSx} disabled={loading}>
            {loading ? "Adding..." : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}