import { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination,
  Chip, Tooltip, Dialog, DialogContent, DialogActions, Button, IconButton, Box
} from '@mui/material';
import Sidebar from "../../Component/Sidebar/Side";
import Header from "../../Component/Header/Header";
import DotsLoader from "../../Component/DotsLoader/DotsLoader";
import { clientsData, activityData } from "./ClientsConstant";
import { Visibility, VisibilityOff, Verified, DoNotDisturbOn } from '@mui/icons-material';

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Password visibility state per client
  const [showPassword, setShowPassword] = useState({});

  // Card dialog state
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setClients(clientsData);
      setIsLoading(false);
    }, 500);
  }, []);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleShowPassword = (username) => {
    setShowPassword((prev) => ({
      ...prev,
      [username]: !prev[username]
    }));
  };

  const handleOpenDialog = (client) => {
    setSelectedClient(client);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedClient(null);
  };

  // Calculate user statistics for the card
  const getClientStats = (username, mail) => {
    const activities = activityData.filter(
      (item) => item.clientUsername === username || item.clientMail === mail
    );
    return {
      orders: activities.length,
      feedbacks: activities.length,
      rates: activities.length,
    };
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
      <Sidebar />
      <div className="w-full flex flex-col">
        <Header />
        <div className="mt-8 p-4">
          <TableContainer component={Paper} sx={{ overflow: "auto", maxHeight: 750 }}>
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
                  <TableCell>Username</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Password</TableCell>
                  <TableCell>Verified</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clients
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((client) => (
                    <TableRow key={client.username}>
                      <TableCell>
                        <Tooltip title="Show client stats">
                          <Button
                            variant="text"
                            onClick={() => handleOpenDialog(client)}
                            sx={{ color: "#76ab2f", textTransform: "none", fontWeight: "bold" }}
                          >
                            {client.username}
                          </Button>
                        </Tooltip>
                      </TableCell>
                      <TableCell>{client.mail}</TableCell>
                      <TableCell>{client.phone}</TableCell>
                      <TableCell>
                        <span style={{ letterSpacing: 2 }}>
                          {showPassword[client.username]
                            ? client.password
                            : "●●●●●●●●"}
                        </span>
                        <IconButton
                          size="small"
                          onClick={() => handleShowPassword(client.username)}
                          sx={{ ml: 1, color: "#76ab2f" }}
                        >
                          {showPassword[client.username] ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        {client.verified
                          ? <Chip icon={<Verified sx={{ color: "#fff" }} />} label="Verified" sx={{ backgroundColor: "#76ab2f", color: "#fff" }} />
                          : <Chip icon={<DoNotDisturbOn sx={{ color: "#fff" }} />} label="Not Verified" color="default" />}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={clients.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              border: '5px solid #76ab2f',
              borderRadius: '30px',
              p: 0,
              margin: 0,
              background: '#fff'
            }
          }}
        >
          <Box
            sx={{
              p: 5,
              minWidth: 400,
              minHeight: 250,
              width: { xs: "90vw", sm: "600px", md: "800px" },
              maxWidth: "900px",
              background: '#fff'
            }}
          >
           
            {selectedClient && (
              <DialogContent sx={{ fontSize: "1.35rem" }}>
                <div style={{ fontWeight: "bold", marginBottom: 12, fontSize: "1.5rem", textAlign: "center" }}>{selectedClient.username}</div>
                <div style={{ marginBottom: 7 }}>
                  <strong>Email:</strong> {selectedClient.mail}
                </div>
                <div style={{ marginBottom: 7 }}>
                  <strong>Phone:</strong> {selectedClient.phone}
                </div>
                <div style={{ marginBottom: 7 }}>
                  <strong>Verified:</strong> {selectedClient.verified ? "Yes" : "No"}
                </div>
                <hr style={{ margin: "18px 0" }} />
                {(() => {
                  const stats = getClientStats(selectedClient.username, selectedClient.mail);
                  return (
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly', fontSize: "1.2rem" }}>
                      <div>
                        <strong>Orders:</strong>
                        <div style={{ fontSize: "2.1rem", color: "#76ab2f", fontWeight: "bold" }}>{stats.orders}</div>
                      </div>
                      <div>
                        <strong>Feedbacks:</strong>
                        <div style={{ fontSize: "2.1rem", color: "#76ab2f", fontWeight: "bold" }}>{stats.feedbacks}</div>
                      </div>
                      <div>
                        <strong>Rates:</strong>
                        <div style={{ fontSize: "2.1rem", color: "#76ab2f", fontWeight: "bold" }}>{stats.rates}</div>
                      </div>
                    </Box>
                  );
                })()}
              </DialogContent>
            )}
            <DialogActions sx={{ justifyContent: "center" }}>
              <Button onClick={handleCloseDialog} sx={{ color: "#76ab2f", fontSize: "1.2rem", fontWeight: "bold" }}>Close</Button>
            </DialogActions>
          </Box>
        </Dialog>
      </div>
    </div>
  );
}