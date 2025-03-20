import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, IconButton, Tooltip } from '@mui/material';
import { Block, Delete } from '@mui/icons-material';
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

export default function Users() {
  const [users, setUsers] = useState(initialUsersData);

  const handleBlockClick = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, blocked: !user.blocked } : user
    ));
  };

  const handleDeleteClick = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="w-full flex flex-col">
        <Header />
        <div className="mt-8 p-4">
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{backgroundColor: "#76ab2f"}}>
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
                        <Chip label="Active" sx={{ backgroundColor: "#76ab2f"}} />
                      ) : (
                        <Chip label="Inactive" color="default" />
                      )}
                    </TableCell>
                    <TableCell>
                      <Tooltip title="Block/Unblock User">
                        <IconButton 
                          onClick={() => handleBlockClick(user.id)} 
                          sx={{ color: user.blocked ? 'red' : 'inherit' }}
                        >
                          <Block />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete User">
                        <IconButton 
                          onClick={() => handleDeleteClick(user.id)} 
                          color="error"
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
      </div>
    </div>
  );
}