import { useState, useEffect } from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
  IconButton,
  TablePagination,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import Sidebar from "../../Component/Sidebar/Side";
import Header from "../../Component/Header/Header";
import AddCart from './AddCart';
import DotsLoader from "../../Component/DotsLoader/DotsLoader"; // Import DotsLoader

export default function CartService() {
  const [cartData, setCartData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // Data to display in the table
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Number of rows per page

  const token = localStorage.getItem('token'); // Retrieve the token from localStorage

  // Handle pagination page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page
  };

  // Handle filter change
  const handleFilterChange = (filterText) => {
    if (filterText) {
      const filtered = cartData.filter((cart) =>
        cart.code.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(cartData); // Reset to full data if no filter is applied
    }
    setPage(0); // Reset to the first page when filtering
  };

  // Fetch cart data on component mount
  useEffect(() => {
    fetchCartData();
  }, []);

  // Fetch Cart Data
  const fetchCartData = async () => {
    try {
      const response = await fetch(
        'https://shehab123.pythonanywhere.com/cart/manageEsyCart/',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const mappedData = data.map((cart) => ({
          code: cart.cartId,
          lastService: cart.lastMaintenanceTime,
          hasProblem: cart.cartStatus !== "ready",
          position: cart.location,
          battery: `${cart.batteryPercentage}%`,
          status: cart.cartStatus,
        }));
        setCartData(mappedData);
        setFilteredData(mappedData); // Initialize filtered data with the full data
      } else {
        console.error('Failed to fetch cart data:', await response.text());
      }
    } catch (error) {
      console.error('Failed to fetch cart data:', error);
    } finally {
      setIsLoading(false); // Set loading state to false after fetching data
    }
  };

  // Add a new cart
  const handleAddCart = (newCart) => {
    const newCartData = {
      code: newCart.cartId,
      lastService: newCart.lastMaintenanceTime,
      hasProblem: newCart.cartStatus !== "ready",
      position: newCart.location,
      battery: `${newCart.batteryPercentage}%`,
      status: newCart.cartStatus,
    };

    setCartData((prevData) => [...prevData, newCartData]);
    setFilteredData((prevData) => [...prevData, newCartData]); // Update filtered data
  };

  // Delete a Cart
  const handleDeleteCart = (cartCode) => {
    setCartData((prevData) => prevData.filter((cart) => cart.code !== cartCode));
    setFilteredData((prevData) =>
      prevData.filter((cart) => cart.code !== cartCode)
    );
  };

  // Toggle Cart Status
  const handleStatusToggle = async (cartCode, currentStatus) => {
    const newStatus = currentStatus === "ready" ? "problem" : "ready"; // Toggle status

    try {
      const response = await fetch(
        `https://shehab123.pythonanywhere.com/cart/manageEsyCart/${cartCode}`,
        {
          method: 'PATCH', // Use PATCH for partial updates
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ cartStatus: newStatus }), // Send the updated status
        }
      );

      if (response.ok) {
        // Update the local state to reflect the new status
        setCartData((prevData) =>
          prevData.map((cart) =>
            cart.code === cartCode ? { ...cart, status: newStatus } : cart
          )
        );
        setFilteredData((prevData) =>
          prevData.map((cart) =>
            cart.code === cartCode ? { ...cart, status: newStatus } : cart
          )
        );
      } else {
        console.error('Failed to update cart status:', await response.text());
      }
    } catch (error) {
      console.error('Failed to update cart status:', error);
    }
  };

  if (isLoading) {
    // Show the loader while fetching data
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
        <div className="p-5 flex justify-end items-end">
          <AddCart onAddCart={handleAddCart} onFilterChange={handleFilterChange} />
        </div>
        <Container className="mt-8 p-4 bg-white shadow-md rounded-md">
          <div className="mb-6">
            <TableContainer component={Paper} sx={{ maxHeight: 750, overflow: 'auto' }}>
              <Table>
                <TableHead sx={{ backgroundColor: "#76ab2f", position: "sticky", top: 0, zIndex: 1
                , "& th": {
                  color: "#fff",
                  fontWeight: "bold",
                }, }}>
                  <TableRow>
                    <TableCell>Cart ID</TableCell>
                    <TableCell>Last Service Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Battery</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // Paginate filtered data
                    .map((cart) => (
                      <TableRow
                        key={cart.code}
                        className={cart.status !== "ready" ? 'bg-red-100' : ''}
                      >
                        <TableCell>{cart.code}</TableCell>
                        <TableCell>{cart.lastService}</TableCell>
                        <TableCell>
                          <Switch
                            checked={cart.status === "ready"} // Status toggle
                            onChange={() =>
                              handleStatusToggle(cart.code, cart.status)
                            }
                            sx={{
                              '& .MuiSwitch-thumb': {
                                backgroundColor: cart.status === "ready" ? "green" : "red",
                              },
                              '& .MuiSwitch-track': {
                                backgroundColor: cart.status === "ready" ? "lightgreen" : "pink",
                              },
                            }}
                          />
                          {cart.status === "ready" ? "OK" : "Problem"}
                        </TableCell>
                        <TableCell>{cart.position}</TableCell>
                        <TableCell>{cart.battery}</TableCell>
                        <TableCell>
                          <IconButton
                            onClick={() => handleDeleteCart(cart.code)}
                            color="error"
                          >
                            <Delete />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* Pagination Component */}
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={filteredData.length} // Use filtered data length
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}