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
  const [localProducts, setLocalProducts] = useState(Products);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [deleting, setDeleting] = useState(null);

  const handleDelete = async (QRNumber) => {
    setDeleting(QRNumber);
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
        setLocalProducts((prev) => prev.filter((p) => p.QRNumber !== QRNumber));
        // Adjust page if needed
        if ((page * rowsPerPage) >= (localProducts.length - 1) && page > 0) {
          setPage(page - 1);
        }
      } else {
        console.error("Failed to delete product:", response.statusText);
      }
    } catch (error) {
      console.log("Error while deleting the product:", error);
    } finally {
      setDeleting(null);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedProducts = localProducts.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div>
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
                <TableCell>
                  {product.ProductPrice !== undefined && product.ProductPrice !== null
                    ? `LE${Number(product.ProductPrice).toFixed(2)}`
                    : ""}
                </TableCell>
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
        <TablePagination
          component="div"
          count={localProducts.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 15, 20, 25]}
        />
      </TableContainer>
    </div>
  );
}