import { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import Sidebar from "../../Component/Sidebar/Side";
import Header from "../../Component/Header/Header";
import DotsLoader from '../../Component/DotsLoader/DotsLoader';
import AddCart from './AddCart';


export default function CartService() {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Retrieve the token from localStorage
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://shehab123.pythonanywhere.com/cart/manageEsyCart/', {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token here
        },
      });

      if (response.ok) {
        const data = await response.json();
        const mappedData = data.map(cart => ({
          code: cart.cartId,
          lastService: cart.lastMaintenanceTime,
          hasProblem: cart.cartStatus !== "ready",
          position: cart.location,
          battery: `${cart.batteryPercentage}%`,
        }));
        setCartData(mappedData);
      } else {
        console.error('Failed to fetch cart data:', await response.text());
      }
    } catch (error) {
      console.error('Failed to fetch cart data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCart = async (cartCode) => {
    setLoading(true);
    try {
      const response = await fetch(`https://shehab123.pythonanywhere.com/cart/manageEsyCart/${cartCode}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`, // Add the token here
        },
      });

      if (response.ok) {
        fetchCartData(); // Refresh the cart list after deletion
      } else {
        console.error('Failed to delete cart:', await response.text());
      }
    } catch (error) {
      console.error('Failed to delete cart:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="w-full flex flex-col">
        <Header />
        <div className=" p-5 flex flex-col items-end"   >
<AddCart/>
</div>
        <Container className="mt-8 p-4 bg-white shadow-md rounded-md">
          <div className="mb-6">
            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ backgroundColor: "#76ab2f" }}>
                  <TableRow>
                    <TableCell>Cart Code</TableCell>
                    <TableCell>Last Service Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Position</TableCell>
                    <TableCell>Battery</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartData.map((cart) => (
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
                      <TableCell>{cart.battery}</TableCell>
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
        {loading && <DotsLoader />}
      </div>
    </div>
  );
}