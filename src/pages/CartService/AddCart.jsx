import { useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Add, FilterList } from "@mui/icons-material";

// TextField styling as a constant
const textFieldSx = {
  fullWidth: true,
  variant: "outlined",
  color: "#e0e0e0",
  sx: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#e0e0e0", // Default border color
      },
      "&:hover fieldset": {
        borderColor: "#76ab2f", // Hover border color
      },
      "&.Mui-focused fieldset": {
        borderColor: "#76ab2f", // Focused border color
      },
    },
  },
};

export default function AddCart({ onAddCart, onFilterChange }) {
  const [addCartOpen, setAddCartOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [newCartCode, setNewCartCode] = useState("");
  const [newCartBattery, setNewCartBattery] = useState("");
  const [newCartPosition, setNewCartPosition] = useState("");
  const [newCartStatus, setNewCartStatus] = useState(""); // New state for cart status
  const [filterText, setFilterText] = useState("");

  // Handlers for Add Cart Dialog
  const handleAddCartOpen = () => {
    setAddCartOpen(true);
  };

  const handleAddCartClose = () => {
    setAddCartOpen(false);
    setNewCartCode("");
    setNewCartBattery("");
    setNewCartPosition("");
    setNewCartStatus(""); // Reset status to default
  };

  const handleAddCartSubmit = () => {
    if (newCartCode && newCartBattery && newCartPosition && newCartStatus) {
      onAddCart({
        cartId: newCartCode,
        cartStatus: newCartStatus, // Use selected status
        batteryPercentage: parseInt(newCartBattery, 10),
        location: newCartPosition,
        lastMaintenanceTime: new Date().toISOString(),
      });
      handleAddCartClose();
    }
  };

  // Handlers for Filter Dialog
  const handleFilterOpen = () => {
    setFilterOpen(true);
  };

  const handleFilterClose = () => {
    setFilterOpen(false);
  };

  const handleFilterSubmit = () => {
    onFilterChange(filterText); // Pass the filter text to parent
    handleFilterClose();
  };

  return (
    <div className="flex space-x-4">
      {/* Filter Button */}
      <Button
        variant="contained"
        startIcon={<FilterList />}
        onClick={handleFilterOpen}
        sx={{
          backgroundColor: "#76ab2f",
          "&:hover": {
            backgroundColor: "#5a8f24",
          },
        }}
      >
        Filter
      </Button>

      {/* Add Cart Button */}
      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={handleAddCartOpen}
        sx={{
          backgroundColor: "#76ab2f",
          "&:hover": {
            backgroundColor: "#5a8f24",
          },
        }}
      >
        Add Cart
      </Button>

      {/* Add Cart Dialog */}
      <Dialog open={addCartOpen} onClose={handleAddCartClose}>
        <DialogTitle>Add New Cart</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the details for the new cart.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Cart Code"
            value={newCartCode}
            onChange={(e) => setNewCartCode(e.target.value)}
            {...textFieldSx}
          />
          <TextField
            margin="dense"
            label="Battery"
            value={newCartBattery}
            onChange={(e) => setNewCartBattery(e.target.value)}
            {...textFieldSx}
          />
          <TextField
            margin="dense"
            label="Position"
            value={newCartPosition}
            onChange={(e) => setNewCartPosition(e.target.value)}
            {...textFieldSx}
          />
          <FormControl {...textFieldSx} margin="dense">
            <InputLabel>Status</InputLabel>
            <Select
              value={newCartStatus}
              onChange={(e) => setNewCartStatus(e.target.value)}
              input={<OutlinedInput label="Status" />}
            >
              <MenuItem value="ready">OK</MenuItem>
              <MenuItem value="problem">Problem</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleAddCartClose}
            sx={{ color: "#76ab2f", borderRadius: "8px" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleAddCartSubmit}
            sx={{ color: "#76ab2f", borderRadius: "8px" }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Filter Dialog */}
      <Dialog open={filterOpen} onClose={handleFilterClose}>
        <DialogTitle>Filter by Cart ID</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the Cart ID to filter the results.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Cart ID"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            {...textFieldSx}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleFilterClose}
            sx={{ color: "#76ab2f", borderRadius: "8px" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleFilterSubmit}
            sx={{ color: "#76ab2f", borderRadius: "8px" }}
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}