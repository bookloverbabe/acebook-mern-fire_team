import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <h1><i>Acebook</i></h1>
        <div className="btn-container">
          <Link to="/signup" className="btn">Sign Up</Link>
          <Link to="/login" className="btn">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;