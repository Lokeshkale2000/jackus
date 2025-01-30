import React, { useState } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import { addUser, updateUser } from "./services/api";
import "./App.css";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = () => {
    setSelectedUser(null);
    setShowForm(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowForm(true);
  };

  const handleFormSubmit = async (userData) => {
    try {
      if (selectedUser) {
        await updateUser(selectedUser.id, userData);
      } else {
        await addUser(userData);
      }
      setShowForm(false);
      window.location.reload(); 
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="app">
      <h1>User Management Dashboard</h1>
      <button className="add-user-btn" onClick={handleAddUser}>
        Add User
      </button>
      <UserList onEdit={handleEditUser} />
      {showForm && (
        <UserForm
          user={selectedUser}
          onSubmit={handleFormSubmit}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default App;
