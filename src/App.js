import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import ListingPage from './Pages/ListingPage';
import UserDetails from './Pages/UserDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile/:userId" element={<UserDetails />} />
        <Route path="/profile" element={<ListingPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
