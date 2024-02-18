import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://express-t4.onrender.com/api/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };
    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details-container">
      <div className="user-details">
        <h2>User Details</h2>
        <div className="user-info">
          <div>
            <img src={user.picture} alt={`${user.name}'s profile`} />
          </div>
          <div>
            <p>Name: {user.name}</p>
            <p>Greeting: {user.greeting}</p>
            <p>Gender: {user.gender}</p>
            <p>About: {user.about}</p>
            <p>Favorite Fruit: {user.favoriteFruit}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address}</p>
            <p>Company: {user.company}</p>
            <p>Tags: {user.tags.join(', ')}</p>
            <p>Friends: {user.friends.map(friend => friend.name).join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
