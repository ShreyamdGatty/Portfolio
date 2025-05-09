import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setPage }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Center text */}
      <div className="navbar-title">
        <strong><em>Portfolio</em></strong>
      </div>

      {open && (
        <div className="menu-items">
          <div onClick={() => setPage('home')}>Home</div>
          <div onClick={() => setPage('education')}>Education</div>
          <div onClick={() => setPage('projects')}>Projects</div>
          <div onClick={() => setPage('Certification')}>Certification</div>
          
        </div>
      )}
    </div>
  );
};

export default Navbar;


