import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import './AccountPage.css';

const AccountPage = () => {
  const [cookies, setCookie] = useCookies(['user', 'email', 'phoneNumber']); // Include additional fields here
  const [editingUsername, setEditingUsername] = useState(false);
  const [newUsername, setNewUsername] = useState(cookies.user || ''); // Initialize with cookie value or empty string

  const handleUsernameChange = () => {
    // Logic to update username, e.g., setCookie('user', newUsername);
    // For demo purposes, I'm just updating the state
    setCookie('user', newUsername);
    setEditingUsername(false);
  };

  return (
    <div className="account-page">
      <h1 className="account-heading">Account Information</h1>
      {editingUsername ? (
        <div className="username-edit">
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            placeholder="Enter new username"
            className="username-input"
          />
          <button className="save-btn" onClick={handleUsernameChange}>Save</button>
        </div>
      ) : (
        <div className="account-user-info">
          <p><strong>Username:</strong> {cookies.user}</p>
          {cookies.email && <p><strong>Email:</strong> {cookies.email}</p>}
          {cookies.phoneNumber && <p><strong>Phone Number:</strong> {cookies.phoneNumber}</p>}
          {/* Add more user information here as needed */}
          <button className="edit-icon" onClick={() => setEditingUsername(true)}>
            <i className="fas fa-edit"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
