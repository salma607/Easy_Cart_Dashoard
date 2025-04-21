import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Fab } from '@mui/material';
import { Block, Delete, Add } from '@mui/icons-material';
import Sidebar from "../../Component/Sidebar/Side";
import Header from "../../Component/Header/Header";

const initialUsersData = [
  { id: 126525, name: 'John Doe', email: 'john.doe@example.com', active: true },
  { id: 2856241, name: 'Jane Smith', email: 'jane.smith@example.com', active: false },
  { id: 37468, name: 'Alice Johnson', email: 'alice.johnson@example.com', active: true },
  { id: 44582, name: 'Bob Brown', email: 'bob.brown@example.com', active: false },
  { id: 52258, name: 'Charlie Davis', email: 'charlie.davis@example.com', active: true },
  { id: 60025, name: 'Dana Evans', email: 'dana.evans@example.com', active: false },
  { id: 77859, name: 'Eve Foster', email: 'eve.foster@example.com', active: true },
  { id: 81256, name: 'Frank Green', email: 'frank.green@example.com', active: false },
  { id: 9251, name: 'Grace Hall', email: 'grace.hall@example.com', active: true },
  { id: 107855, name: 'Hank Ives', email: 'hank.ives@example.com', active: false },
];

// Styles as constants
const textFieldStyles = {
  margin: "dense",
  fullWidth: true,
  variant: "outlined",
  color: "#e0e0e0",
  sx: {
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
  },
};

const buttonStyles = {
  color: "#76ab2f",
  "&:hover": {
    color: "#76ab2f",
    backgroundColor: "#f7fee7",
    borderRadius: "8px",
  },
};

const iconButtonStyles = {
  block: (blocked) => ({
    color: blocked ? 'red' : 'inherit',
  }),
  delete: {
    color: "#76ab2f",
    "&:hover": {
      color: "#76ab2f",
      backgroundColor: "#f7fee7",
      borderRadius: "8px",
    },
  },
};

const fabStyles = {
  position: 'fixed',
  bottom: 16,
  right: 16,
  backgroundColor: "#76ab2f",
};

export default function Users() {
  const [users, setUsers] = useState(initialUsersData);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [newUser, setNewUser] = useState({ id: '', name: '', email: '', active: false });
  const [loading] = useState(false);

  const handleBlockClick = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, blocked: !user.blocked } : user
    ));
  };

  const handleDeleteClick = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleAddUser = () => {
    if (!newUser.id || !newUser.name || !newUser.email) {
      alert("Please provide all details (ID, Name, Email).");
      return;
    }

    // Check if the ID already exists
    if (users.some(user => user.id === Number(newUser.id))) {
      alert("User with the same ID already exists.");
      return;
    }

    // Add the new user to the state
    setUsers([
      ...users,
      {
        id: Number(newUser.id),
        name: newUser.name,
        email: newUser.email,
        active: true,
      },
    ]);

    // Reset the form and close the dialog
    setNewUser({ id: "", name: "", email: "", active: false });
    setAddDialogOpen(false);
  };

  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="w-full flex flex-col">
        <Header />
        <div className="mt-8 p-4">
          {/* Users Table */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#76ab2f" }}>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell sx={{ textDecoration: user.blocked ? 'line-through' : 'none', color: user.blocked ? 'red' : 'inherit' }}>{user.id}</TableCell>
                    <TableCell sx={{ textDecoration: user.blocked ? 'line-through' : 'none', color: user.blocked ? 'red' : 'inherit' }}>{user.name}</TableCell>
                    <TableCell sx={{ textDecoration: user.blocked ? 'line-through' : 'none', color: user.blocked ? 'red' : 'inherit' }}>{user.email}</TableCell>
                    <TableCell>
                      {user.active ? (
                        <Chip label="Active" sx={{ backgroundColor: "#76ab2f" }} />
                      ) : (
                        <Chip label="Inactive" color="default" />
                      )}
                    </TableCell>
                    <TableCell>
                      <Tooltip title="Block/Unblock User">
                        <IconButton 
                          onClick={() => handleBlockClick(user.id)} 
                          sx={iconButtonStyles.block(user.blocked)}
                        >
                          <Block />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete User">
                        <IconButton 
                          onClick={() => handleDeleteClick(user.id)} 
                          sx={iconButtonStyles.delete}
                        >
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/* Add User Dialog */}
        <Dialog open={addDialogOpen} onClose={() => setAddDialogOpen(false)}>
          <DialogTitle>Add New Worker</DialogTitle>
          <DialogContent>
            <TextField
              label="ID"
              value={newUser.id}
              onChange={(e) => setNewUser({ ...newUser, id: e.target.value })}
              type="number"
              {...textFieldStyles}
            />
            <TextField
              label="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              {...textFieldStyles}
            />
            <TextField
              label="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              {...textFieldStyles}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setAddDialogOpen(false)} {...buttonStyles.cancel}>
              Cancel
            </Button>
            <Button onClick={handleAddUser} {...buttonStyles.add} disabled={loading}>
              {loading ? "Loading..." : "Add"}
            </Button>
          </DialogActions>
        </Dialog>

        {/* Floating Add Button */}
        <Fab 
          color="#76ab2f" 
          aria-label="add" 
          onClick={() => setAddDialogOpen(true)} 
          sx={fabStyles}
        >
          <Add />
        </Fab>
      </div>
    </div>
  );
}