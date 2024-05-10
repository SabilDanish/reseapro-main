import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation

const NotFoundPage = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const linkStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: hovered ? '#005fcc' : 'transparent',
    color: hovered ? '#fff' : '#0070f3',
    textDecoration: 'none',
    borderRadius: '5px',
    border: `1px solid ${hovered ? '#005fcc' : '#0070f3'}`,
    transition: 'color 0.3s, background-color 0.3s, border-color 0.3s',
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>Sorry, the page you're looking for doesn't exist.</p>
      <Link
        to="/"
        style={linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Go back to home page
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    marginTop: '20px',
    color: '#333',
  },
  text: {
    fontSize: '1.2rem',
    marginTop: '10px',
    color: '#666',
  },
};

export default NotFoundPage;