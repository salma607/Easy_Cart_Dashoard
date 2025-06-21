import { useState } from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  CircularProgress,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

export default function ProductTable({ Products }) {
  const [page, setPage] = useState(0); // Current page number
  const [rowsPerPage, setRowsPerPage] = useState(5); // Number of rows per page
  const [deleting, setDeleting] = useState(null); // Track which product is being deleted

  const handleDelete = async (QRNumber) => {
    setDeleting(QRNumber); // Set the product being deleted
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://shehab123.pythonanywhere.com/product/edit/${QRNumber}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Product deleted successfully:", data);
        window.location.reload(); // Reload the page to reflect changes
      } else {
        console.error("Failed to delete product:", response.statusText);
      }
    } catch (error) {
      console.log("Error while deleting the product:", error);
    } finally {
      setDeleting(null); // Reset the deleting state
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page
  };

  // Calculate the products to display on the current page
  const paginatedProducts = Products.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div>
      {/* Product Table */}
      <TableContainer
        component={Paper}
        sx={{ mt: 3, borderRadius: "8px", overflow: "auto", maxHeight: "750px" }}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#76ab2f",
                position: "sticky",
                top: 0,
                zIndex: 1,
                "& th": {
                  color: "#fff",
                  fontWeight: "bold",
                },
              }}
            >
              <TableCell>ID Number</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Product Rate</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Available</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedProducts.map((product) => (
              <TableRow key={product.QRNumber} >
                <TableCell>{product.QRNumber}</TableCell>
                <TableCell>{product.ProductName}</TableCell>
                <TableCell>{product.ProductCategory}</TableCell>
                <TableCell>${product.ProductPrice.toFixed(2)}</TableCell>
                <TableCell>{product.ProductWeight}kg</TableCell>
                <TableCell>{product.ProductBrand}</TableCell>
                <TableCell>{product.ProductTotalRate}</TableCell>
                <TableCell>{product.ProductPlace}</TableCell>
                <TableCell>{product.ProductAvailable ? "Yes" : "No"}</TableCell>
                <TableCell align="right">
                  {deleting === product.QRNumber ? (
                    <CircularProgress size={24} color="error" />
                  ) : (
                    <IconButton
                      sx={{
                        color: "#ff1744",
                        "&:hover": {
                          backgroundColor: "#ffebee",
                          borderRadius: "8px",
                        },
                      }}
                      onClick={() => handleDelete(product.QRNumber)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Pagination Controls */}
        <TablePagination
          component="div"
          count={Products.length} // Total number of products
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 15, 20, 25]} // Options for rows per page
        />
      </TableContainer>
    </div>
  );
}