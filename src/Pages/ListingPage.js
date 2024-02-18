import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../CSS/ListingPage.css';

const ListingPage = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://express-t4.onrender.com/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUserClick = (userId) => {
    navigate(`/profile/${userId}`);
  };

  return (
    <div className="listing-page">
      <div className="content-container">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search by First Name and Last Name" 
            value={searchQuery} 
            onChange={handleSearchInputChange} 
          />
        </div>
        <div className="listing-container">
          {filteredUsers.map(user => (
            <div className="card" key={user._id} onClick={() => handleUserClick(user._id)}>
              <img src={user.picture} alt={`${user.name}'s profile`} />
              <div className="card-content">
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p className="description">{user.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
