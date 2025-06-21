import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Tooltip,
  TablePagination,
} from '@mui/material';
import { Cancel, CheckCircle, Star, StarHalf } from '@mui/icons-material';
import Sidebar from "../../Component/Sidebar/Side";
import Header from "../../Component/Header/Header";
import DotsLoader from "../../Component/DotsLoader/DotsLoader";
import 'tailwindcss/tailwind.css';

const initialOrdersData = [
  { id: 1, date: '2025-03-01', price: '$150', code: 'ORD001', status: 'canceled', delivery: 'delivery', email: 'john.doe@example.com', name: 'John Doe', weight: '5kg', rate: 1.2 },
  { id: 2, date: '2025-03-02', price: '$200', code: 'ORD002', status: 'checked', delivery: 'supermarket', email: 'jane.smith@example.com', name: 'Jane Smith', weight: '15kg', rate: 3.5 },
  { id: 3, date: '2025-03-03', price: '$250', code: 'ORD003', status: 'checked', delivery: 'delivery', email: 'alice.johnson@example.com', name: 'Alice Johnson', weight: '20kg', rate: 4.2 },
  { id: 4, date: '2025-03-04', price: '$300', code: 'ORD004', status: 'canceled', delivery: 'supermarket', email: 'bob.brown@example.com', name: 'Bob Brown', weight: '6kg', rate: 2.0 },
  { id: 5, date: '2025-03-05', price: '$350', code: 'ORD005', status: 'checked', delivery: 'delivery', email: 'charlie.davis@example.com', name: 'Charlie Davis', weight: '10kg', rate: 4.8 },
  { id: 6, date: '2025-03-06', price: '$400', code: 'ORD006', status: 'canceled', delivery: 'supermarket', email: 'dana.evans@example.com', name: 'Dana Evans', weight: '8kg', rate: 3 },
  { id: 7, date: '2025-03-07', price: '$450', code: 'ORD007', status: 'checked', delivery: 'delivery', email: 'eve.foster@example.com', name: 'Eve Foster', weight: '5.5kg', rate: 4.7 },
  { id: 8, date: '2025-03-08', price: '$500', code: 'ORD008', status: 'canceled', delivery: 'supermarket', email: 'frank.green@example.com', name: 'Frank Green', weight: '3.5kg', rate: 4},
  { id: 9, date: '2025-03-09', price: '$550', code: 'ORD009', status: 'checked', delivery: 'delivery', email: 'grace.hall@example.com', name: 'Grace Hall', weight: '2.1kg', rate: 2 },
  { id: 10, date: '2025-03-10', price: '$600', code: 'ORD010', status: 'canceled', delivery: 'supermarket', email: 'hank.ives@example.com', name: 'Hank Ives', weight: '9kg', rate: 4.7 },
];

const renderStars = (rate) => {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 !== 0;
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} style={{ color: '#FFD700' }} />);
  }
  if (hasHalfStar) {
    stars.push(<StarHalf key={fullStars} style={{ color: '#FFD700' }} />);
  }
  while (stars.length < 5) {
    stars.push(<Star key={stars.length} style={{ color: '#E0E0E0' }} />);
  }
  return stars;
};

export default function Order() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const fetchOrders = async () => {
      setTimeout(() => {
        setOrders(initialOrdersData);
        setIsLoading(false);
      }, 2000);
    };
    fetchOrders();
  }, []);

  const handleCancelOrder = (orderId) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: 'canceled' } : order
    ));
  };

  const handleCheckOrder = (orderId) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: 'checked' } : order
    ));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (isLoading) {
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
        <div className="mt-8 p-4">
          <TableContainer component={Paper} sx={{ maxHeight: 700, overflow: 'auto' }}>
            <Table>
              <TableHead sx={{ backgroundColor: "#76ab2f", top: 0, position: 'sticky', zIndex: 1,"& th": {
                  color: "#fff",
                  fontWeight: "bold",
                }, }}>
                <TableRow>
                  <TableCell>Order Date</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Order Code</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Delivery Method</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Customer Name</TableCell>
                  <TableCell>Weight</TableCell>
                  <TableCell>Rate</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((order) => (
                    <TableRow 
                      key={order.id}
                      className={order.status === 'canceled' ? 'bg-red-100' : ''}
                    >
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{order.price}</TableCell>
                      <TableCell>{order.code}</TableCell>
                      <TableCell>
                        {order.delivery === 'delivery' ? (
                          order.status === 'checked' ? (
                            <Chip label="Delivered" sx={{ backgroundColor: "#76ab2f", color: "white" }} />
                          ) : (
                            <Chip label="Canceled" color="error" />
                          )
                        ) : (
                          order.status === 'checked' ? (
                            <Chip label="Checked" sx={{ backgroundColor: "#FFD400", color: "black" }} />
                          ) : (
                            <Chip label="Canceled" color="error" />
                          )
                        )}
                      </TableCell>
                      <TableCell>{order.delivery}</TableCell>
                      <TableCell>{order.email}</TableCell>
                      <TableCell>{order.name}</TableCell>
                      <TableCell>{order.weight}</TableCell>
                      <TableCell>{renderStars(order.rate)}</TableCell>
                      <TableCell>
                        <Tooltip title="Cancel Order">
                          <IconButton 
                            onClick={() => handleCancelOrder(order.id)} 
                            color="error"
                            disabled={order.status === 'canceled'}
                          >
                            <Cancel />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Check Order">
                          <IconButton 
                            onClick={() => handleCheckOrder(order.id)} 
                            sx={{ color: "#76ab2f" }}
                            disabled={order.status === 'checked'}
                          >
                            <CheckCircle />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={orders.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </div>
  );
}