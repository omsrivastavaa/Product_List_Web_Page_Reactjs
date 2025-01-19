import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    if (!localStorage.getItem('isAuthenticated')) {
      navigate('/'); // If not authenticated, redirect to login page
    }
  }, [navigate]);

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the product management page!</p>
      {/* Add the product management form here */}
    </div>
  );
};

export default Home;
