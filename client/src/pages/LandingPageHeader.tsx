import React from 'react';
import './LandingPage.css';

const LandingPageHeader = () => {
  return (
    <nav className="navigation">
      <h2 className="logo" style={{ textDecoration: 'underline' }}>
        Bill tracker
      </h2>
      <div style={{ display: 'flex', padding: '0 15px' }}>
        <a className="link" href="#">
          Login
        </a>
        <a className="link" style={{ padding: '0 10px' }} href="#">
          Sign up
        </a>
      </div>
    </nav>
  );
};

export default LandingPageHeader;
