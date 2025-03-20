import { useState } from "react";
import {
  IconButton,
  Tabs,
  Tab,
  Table,
  DialogActions,
  DialogContent,
  Button,
  Box,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  TextField,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";

export default function Tables({ Products }) {
  const [open, setOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    QRNumber: "",
    ProductName: "",
    ProductPrice: 0,
    ProductWeight: 0,
    ProductBrand: "",
    ProductRate: "",
    ProductPosition: "",
    ProductAvailable: "Yes",
  });
  const [IdFilter, setIdFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [weightFilter, setWeightFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [rateFilter, setRateFilter] = useState("");
  const [positionFilter, setPositionFilter] = useState("");
  const [availableFilter, setAvailableFilter] = useState("");
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [categories, setCategories] = useState([
    "Fruits&Veg",
    "Snacks",
    "Bakery",
    "Meat & Chicken",
    "Healthcare",
    "Electronics",
  ]);
  const [categoryDialogOpen, setCategoryDialogOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCategoryDialogOpen = () => {
    setCategoryDialogOpen(true);
  };

  const handleCategoryDialogClose = () => {
    setCategoryDialogOpen(false);
  };

  const handleAddCategory = () => {
    setCategories([...categories, newCategory]);
    setNewCategory("");
    setCategoryDialogOpen(false);
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
      backgroundColor: "f6fafd",
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

  
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
      }}
    >
      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <IconButton sx={IconButtonSx} onClick={() => setFilterDialogOpen(true)}>
          <FilterListIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton sx={IconButtonSx} onClick={handleClickOpen}>
          <AddIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </div>

      {/* Category Tabs and Add Category Button */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Tabs
          value={tabIndex}
          onChange={(event, newValue) => setTabIndex(newValue)}
          aria-label="product categories"
          TabIndicatorProps={{ style: { display: "none" } }}
        >
          {categories.map((category, index) => (
            <Tab
              key={index}
              label={category}
              sx={{
                "&:hover": {
                  backgroundColor: "#f7fee7",
                  borderRadius: "8px",
                  color: "#76ab2f",
                },
                "&.Mui-selected": {
                  color: "#4caf50",
                },
              }}
            />
          ))}
        </Tabs>
        <IconButton sx={IconButtonSx} onClick={handleCategoryDialogOpen}>
          <AddIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>

      {/* Add Category Dialog */}
      <Dialog
        open={categoryDialogOpen}
        onClose={handleCategoryDialogClose}
      >
        <DialogTitle>Add New Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Category Name"
            fullWidth
            variant="outlined"
            color="#e0e0e0"
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

      {/* Filter Dialog */}
      <Dialog
        open={filterDialogOpen}
        maxWidth="xs"
        fullWidth
        onClose={() => setFilterDialogOpen(false)}
      >
        <DialogTitle>Filter Products</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <TextField
              margin="dense"
              label="ID"
              fullWidth
              variant="outlined"
              type="number"
              color="#e0e0e0"
              value={IdFilter}
              onChange={(e) => setIdFilter(e.target.value)}
              sx={textFieldSx}
            />
            <TextField
              margin="dense"
              label="Price"
              fullWidth
              variant="outlined"
              type="number"
              color="#e0e0e0"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              sx={textFieldSx}
            />
            <TextField
              margin="dense"
              label="Weight"
              fullWidth
              variant="outlined"
              type="number"
              color="#e0e0e0"
              value={weightFilter}
              onChange={(e) => setWeightFilter(e.target.value)}
              sx={textFieldSx}
            />
            <TextField
              margin="dense"
              label="Brand"
              fullWidth
              variant="outlined"
              color="#e0e0e0"
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              sx={textFieldSx}
            />
            <TextField
              margin="dense"
              label="Rate"
              fullWidth
              variant="outlined"
              color="#e0e0e0"
              value={rateFilter}
              onChange={(e) => setRateFilter(e.target.value)}
              sx={textFieldSx}
            />
            <TextField
              margin="dense"
              label="Position"
              fullWidth
              variant="outlined"
              color="#e0e0e0"
              value={positionFilter}
              onChange={(e) => setPositionFilter(e.target.value)}
              sx={textFieldSx}
            />
            <TextField
              margin="dense"
              label="Available"
              select
              fullWidth
              color="#e0e0e0"
              variant="outlined"
              value={availableFilter}
              onChange={(e) => setAvailableFilter(e.target.value)}
              sx={textFieldSx}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </TextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button sx={ButtonSx} onClick={() => setFilterDialogOpen(false)}>
            Cancel
          </Button>
          <Button sx={ButtonSx} onClick={() => setFilterDialogOpen(false)}>
            Apply
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Product Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Product Id"
            fullWidth
            variant="outlined"
            color="#e0e0e0"
            value={newProduct.ProductId}
            onChange={(e) =>
              setNewProduct({ ...newProduct, ProductId: e.target.value })
            }
            sx={textFieldSx}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Product Name"
            color="#e0e0e0"
            fullWidth
            variant="outlined"
            value={newProduct.ProductName}
            onChange={(e) =>
              setNewProduct({ ...newProduct, ProductName: e.target.value })
            }
            sx={textFieldSx}
          />
          <TextField
            margin="dense"
            label="Product Price"
            type="number"
            fullWidth
            variant="outlined"
            color="#e0e0e0"
            value={newProduct.ProductPrice}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                ProductPrice: parseFloat(e.target.value),
              })
            }
            sx={textFieldSx}
          />
          <TextField
            margin="dense"
            label="Product Weight"
            type="number"
            fullWidth
            color="#e0e0e0"
            variant="outlined"
            value={newProduct.ProductWeight}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                ProductWeight: parseFloat(e.target.value),
              })
            }
            sx={textFieldSx}
          />
          <TextField
            margin="dense"
            label="Product Brand"
            fullWidth
            variant="outlined"
            color="#e0e0e0"
            value={newProduct.ProductBrand}
            onChange={(e) =>
              setNewProduct({ ...newProduct, ProductBrand: e.target.value })
            }
            sx={textFieldSx}
          />
          <TextField
            margin="dense"
            label="Product Rate"
            fullWidth
            color="#e0e0e0"
            variant="outlined"
            value={newProduct.ProductRate}
            onChange={(e) =>
              setNewProduct({ ...newProduct, ProductRate: e.target.value })
            }
            sx={textFieldSx}
          />
          <TextField
            margin="dense"
            label="Product Position"
            fullWidth
            variant="outlined"
            color="#e0e0e0"
            value={newProduct.ProductPosition}
            onChange={(e) =>
              setNewProduct({ ...newProduct, ProductPosition: e.target.value })
            }
            sx={textFieldSx}
          />
          <TextField
            margin="dense"
            label="Product Available"
            select
            fullWidth
            color="#e0e0e0"
            variant="outlined"
            value={newProduct.ProductAvailable}
            onChange={(e) =>
              setNewProduct({ ...newProduct, ProductAvailable: e.target.value })
            }
            sx={textFieldSx}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button sx={ButtonSx} onClick={handleClose}>
            Cancel
          </Button>
          <Button sx={ButtonSx}>Add</Button>
        </DialogActions>
      </Dialog>

      {/* Product Table */}
      <TableContainer
        component={Paper}
        sx={{ mt: 3, borderRadius: "8px", overflow: "hidden" }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#76ab2f", color: "white" }}>
              <TableCell>Id Number</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Rate</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Available</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Products?.map((product) => (
              <TableRow key={product.QRNumber}>
                <TableCell>{product.QRNumber}</TableCell>
                <TableCell>{product.ProductName}</TableCell>
                <TableCell>${product.ProductPrice.toFixed(2)}</TableCell>
                <TableCell>{product.ProductWeight}g</TableCell>
                <TableCell>{product.ProductBrand}</TableCell>
                <TableCell>{product.ProductRate}</TableCell>
                <TableCell>{product.ProductPosition}</TableCell>
                <TableCell>{product.ProductAvailable ? "Yes" : "No"}</TableCell>
                <TableCell align="right">
                  <IconButton
                    sx={{
                      color: "#ff1744",
                      "&:hover": {
                        backgroundColor: "#ffebee",
                        borderRadius: "8px",
                      },
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}