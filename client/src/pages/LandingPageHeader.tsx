import React from 'react';

const LandingPageHeader = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 20px',
        position: 'fixed',
        top: 0,
        zIndex: 5,
        backgroundColor: '#fff',
        width: '100%'
      }}
    >
      <h2 style={{ textDecoration: 'underline', fontSize: 30 }}>
        Bill tracker
      </h2>
      <div style={{ display: 'flex', padding: '0 20px', fontSize: 20 }}>
        <a href="#">Login</a>
        <a style={{ padding: '0 20px' }} href="#">
          Sign up
        </a>
      </div>
    </nav>
  );
};

export default LandingPageHeader;
