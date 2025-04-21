import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

export default function ProductTable({ Products }) {
  const handleEdit = async (QRNumber) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://shehab123.pythonanywhere.com/product/edit/${QRNumber}/`,
        {
          method: "DELETE", // or "PUT", depending on your API
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.reload();
      if (response.ok) {
        const data = await response.json();
        // Reload the page to reflect changes
        console.log("Product updated successfully:", data);
        // Optionally, trigger a re-fetch or update the UI
      } else {
        console.error("Failed to update product:", response.statusText);
      }
    } catch (error) {
      console.log("Error while updating the product:", error);
    }
  };

  return (
    <div>
      {/* Product Table */}
      <TableContainer
        component={Paper}
        sx={{ mt: 3, borderRadius: "8px", overflow: "hidden" }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#76ab2f", color: "white" }}>
              <TableCell>ID Number</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Product Rate</TableCell>
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
                <TableCell>{product.ProductTotalRate}</TableCell>
                <TableCell>{product.ProductPlace}</TableCell>
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
                    onClick={() => handleEdit(product.QRNumber)}
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