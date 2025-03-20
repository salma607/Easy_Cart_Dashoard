import { useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Chip, IconButton, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Add, FilterList, Delete } from '@mui/icons-material';
import Sidebar from "../../Component/Sidebar/Side";
import Header from "../../Component/Header/Header";

const initialCartData = [
  { code: 'CART001', lastService: '2025-02-28', hasProblem: false, position: 'Aisle 1' },
  { code: 'CART002', lastService: '2025-03-01', hasProblem: true, position: 'Aisle 2' },
  { code: 'CART003', lastService: '2025-02-25', hasProblem: false, position: 'Aisle 3' },
  { code: 'CART004', lastService: '2025-03-03', hasProblem: true, position: 'Aisle 4' },
  { code: 'CART005', lastService: '2025-02-27', hasProblem: false, position: 'Aisle 5' },
];

export default function CartService() {
  const [cartData, setCartData] = useState(initialCartData);
  const [filter, setFilter] = useState('');
  const [open, setOpen] = useState(false);
  const [newCartCode, setNewCartCode] = useState('');
  const [newCartDate, setNewCartDate] = useState('');
  const [newCartPosition, setNewCartPosition] = useState('');

  const handleAddCartOpen = () => {
    setOpen(true);
  };

  const handleAddCartClose = () => {
    setOpen(false);
  };

  const handleAddCart = () => {
    if (newCartCode && newCartDate && newCartPosition) {
      const newCart = {
        code: newCartCode,
        lastService: newCartDate,
        hasProblem: false,
        position: newCartPosition,
      };
      setCartData([...cartData, newCart]);
      setNewCartCode('');
      setNewCartDate('');
      setNewCartPosition('');
      handleAddCartClose();
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleDeleteCart = (cartCode) => {
    setCartData(cartData.filter(cart => cart.code !== cartCode));
  };

  const filteredCartData = cartData.filter(cart => 
    cart.code.toLowerCase().includes(filter.toLowerCase())
  );

  const TextfieldSx={
   
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
    
  }
  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="w-full flex flex-col">
        <Header />
        <Container className="mt-8 p-4 bg-white shadow-md rounded-md">
          <div className="flex justify-end mb-6">
            <div className="flex space-x-4">
              <TextField 
                variant="outlined"
                size='small'
                placeholder="Filter"
                 color="#e0e0e0"
                value={filter}
                onChange={handleFilterChange}
                InputProps={{
                  endAdornment: (
                    <IconButton  sx={{
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
                sx={TextfieldSx}/>
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
            </div>
          </div>
          <div className="mb-6">
            <div className="bg-gray-200 h-64 w-full mb-4">
              {/* Virtual map of the supermarket */}
              <div className="flex justify-center items-center h-full">
                <h3 className="text-xl">Virtual Supermarket Map</h3>
              </div>
            </div>
            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{backgroundColor: "#76ab2f"}} >
                  <TableRow>
                    <TableCell>Cart Code</TableCell>
                    <TableCell>Last Service Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Position</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredCartData.map((cart) => (
                    <TableRow key={cart.code} className={cart.hasProblem ? 'bg-red-100' : ''}>
                      <TableCell>{cart.code}</TableCell>
                      <TableCell>{cart.lastService}</TableCell>
                      <TableCell>
                        {cart.hasProblem ? (
                          <Chip label="Problem" color="error" />
                        ) : (
                          <Chip label="OK" color="success" />
                        )}
                      </TableCell>
                      <TableCell>{cart.position}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleDeleteCart(cart.code)} color="error">
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Container>

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
               color="#e0e0e0"
              variant="outlined"
              value={newCartCode}
              onChange={(e) => setNewCartCode(e.target.value)}
              sx={TextfieldSx}/>
            <TextField
              margin="dense"
              label="Last Service Date"
              type="date"
               color="#e0e0e0"
              fullWidth
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              value={newCartDate}
              onChange={(e) => setNewCartDate(e.target.value)}
             sx={TextfieldSx}/>
            <TextField
              margin="dense"
              label="Position"
              fullWidth
               color="#e0e0e0"
              variant="outlined"
              value={newCartPosition}
              onChange={(e) => setNewCartPosition(e.target.value)}
              sx={TextfieldSx}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAddCartClose} sx={{ color: "#76ab2f", borderRadius: "8px" }}>
              Cancel
            </Button>
            <Button onClick={handleAddCart} sx={{ color: "#76ab2f", borderRadius: "8px" }}>
              Add
            </Button>
          </DialogActions>
        </Dialog>
        
      </div>
    </div>
  );
}