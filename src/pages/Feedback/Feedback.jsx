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
import { initialFeedbackData } from "./FeedbackConstant";

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      setFeedbacks(initialFeedbackData);
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
                  <TableCell>ID</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Client Feedback</TableCell>
                  <TableCell>Client Mail</TableCell>
                  <TableCell>Client Username</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {feedbacks
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((feedback) => (
                    <TableRow key={feedback.id}>
                      <TableCell>{feedback.id}</TableCell>
                      <TableCell>{feedback.productName}</TableCell>
                      <TableCell>{feedback.category}</TableCell>
                      <TableCell>{feedback.feedback}</TableCell>
                      <TableCell>{feedback.clientMail}</TableCell>
                      <TableCell>{feedback.clientUsername}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={feedbacks.length}
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