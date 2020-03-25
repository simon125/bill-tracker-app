import React, { useState, useEffect } from 'react';
import './LandingPage.css';

const LandingPageHeader = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const handleWindowScroll = () => {
    if (window.scrollY !== 0 && isScrolledDown === false) {
      setIsScrolledDown(true);
    }
    if (window.scrollY === 0 && isScrolledDown === true) {
      setIsScrolledDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
    return window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (
    <nav
      className={
        isScrolledDown ? 'navigation scrolled-navigation' : 'navigation'
      }
    >
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
