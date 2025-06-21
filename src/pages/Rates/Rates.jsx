import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination
} from '@mui/material';
import Sidebar from "../../Component/Sidebar/Side";
import Header from "../../Component/Header/Header";
import DotsLoader from "../../Component/DotsLoader/DotsLoader";
import { initialRatesData } from "./Constant";

const renderStars = (rate) => {
  const rounded = Math.round(rate * 2) / 2;
  const fullStars = Math.floor(rounded);
  const halfStar = rounded % 1 !== 0;
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i} style={{ color: '#FFD700', fontSize: 20 }}>★</span>);
  }
  if (halfStar) {
    stars.push(<span key="half" style={{ color: '#FFD700', fontSize: 20 }}>☆</span>);
  }
  while (stars.length < 5) {
    stars.push(<span key={stars.length} style={{ color: '#E0E0E0', fontSize: 20 }}>★</span>);
  }
  return stars;
};

export default function Rates() {
  const [rates, setRates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      setRates(initialRatesData);
      setIsLoading(false);
    }, 1000);
  }, []);

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
          <TableContainer component={Paper} sx={{overflow:"auto", maxHeight: 750}}>
            <Table>
              <TableHead sx={{
                backgroundColor: "#76ab2f",
                position: 'sticky',
                top: 0,
                zIndex: 1,
                "& th": {
                  color: "#fff",
                  fontWeight: "bold",
                },
              }}>
                <TableRow>
                  <TableCell>ID Number</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Category Name</TableCell>
                  <TableCell>Rate</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rates
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((rate) => (
                    <TableRow key={rate.QRNumber}>
                      <TableCell>{rate.QRNumber}</TableCell>
                      <TableCell>{rate.ProductName}</TableCell>
                      <TableCell>{rate.ProductCategory}</TableCell>
                      <TableCell>{renderStars(rate.ProductTotalRate)}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rates.length}
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