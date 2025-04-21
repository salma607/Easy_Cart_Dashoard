import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import { Add, FilterList } from '@mui/icons-material';

export default function AddCart({ onAddCart, onFilterChange, filter }) {
  const [open, setOpen] = useState(false);
  const [newCartCode, setNewCartCode] = useState('');
  const [newCartBattery, setNewCartBattery] = useState('');
  const [newCartPosition, setNewCartPosition] = useState('');

  // TextField styling
  const TextfieldSx = {
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

  const handleAddCartOpen = () => {
    setOpen(true);
  };

  const handleAddCartClose = () => {
    setOpen(false);
    setNewCartCode('');
    setNewCartBattery('');
    setNewCartPosition('');
  };

  const handleAddCartSubmit = () => {
    if (newCartCode && newCartBattery && newCartPosition) {
      onAddCart({
        cartId: newCartCode,
        cartStatus: 'ready',
        batteryPercentage: parseInt(newCartBattery, 10),
        location: newCartPosition,
        lastMaintenanceTime: new Date().toISOString(),
      });
      handleAddCartClose();
    }
  };

  return (
    <div className="flex space-x-4">
      {/* Filter Input */}
      <TextField 
        variant="outlined"
        size="small"
        placeholder="Filter"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton sx={{
              color: "#76ab2f",
              "&:hover": {
                color: "#76ab2f",
                backgroundColor: "#f7fee7",
                borderRadius: "8px",
              },
            }}>
              <FilterList />
            </IconButton>
          ),
        }}
        sx={TextfieldSx}
      />
      
      {/* Add Cart Button */}
      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={handleAddCartOpen}
        sx={{
          backgroundColor: '#76ab2f',
          '&:hover': {
            backgroundColor: '#5a8f24',
          },
        }}
      >
        Add Cart
      </Button>

      {/* Add Cart Dialog */}
      <Dialog open={open} onClose={handleAddCartClose}>
        <DialogTitle>Add New Cart</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the details for the new cart.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Cart Code"
            fullWidth
            variant="outlined"
            value={newCartCode}
            onChange={(e) => setNewCartCode(e.target.value)}
            sx={TextfieldSx}
          />
          <TextField
            margin="dense"
            label="Battery"
            fullWidth
            variant="outlined"
            value={newCartBattery}
            onChange={(e) => setNewCartBattery(e.target.value)}
            sx={TextfieldSx}
          />
          <TextField
            margin="dense"
            label="Position"
            fullWidth
            variant="outlined"
            value={newCartPosition}
            onChange={(e) => setNewCartPosition(e.target.value)}
            sx={TextfieldSx}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddCartClose} sx={{ color: "#76ab2f", borderRadius: "8px" }}>
            Cancel
          </Button>
          <Button onClick={handleAddCartSubmit} sx={{ color: "#76ab2f", borderRadius: "8px" }}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}