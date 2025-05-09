import React, { useState } from 'react';
import './Home.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Home = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: "url('/Background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        paddingTop: '100px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <img src="/shreyamd.jpg" alt="Your Name" className="profile-image" />

      <h1 className="name-title">SHREYA MD</h1>

      <div className="links">
        <button className="contact-btn" onClick={() => setShowContact(!showContact)}>
          Contact
        </button>
      </div>

      {showContact && (
        <div className="contact-info" style={{ marginTop: '20px' }}>
          <p><FaEnvelope style={{ marginRight: '8px' }} /> shreyamd2002@gmail.com</p>
          <p><FaPhone style={{ marginRight: '8px' }} /> +91-7025403926</p>
        </div>
      )}
    </div>
  );
};

export default Home;




