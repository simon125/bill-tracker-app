// node modules
import React, { useState, useEffect } from 'react';
// local modules
import { Paragraph } from '../components/LandingPageSections/LandingPageSection.styled';
import {
  Hero,
  Features,
  Demo,
  Quote,
  Contact,
} from '../components/LandingPageSections';
import LandingPageNavigation from '../components/Navigation/LandingPageNavigation';
import './LandingPage.css';

const LandingPage = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const handleWindowScroll = () => {
    if (window.scrollY !== 0 && !isScrolledDown) {
      setIsScrolledDown(true);
    }
    if (window.scrollY === 0 && isScrolledDown) {
      setIsScrolledDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, [isScrolledDown]);

  return (
    <>
      <LandingPageNavigation fixedNavigation={isScrolledDown} />
      <Hero isScrolledDown={isScrolledDown} />
      <Features />
      <Demo />
      <Quote />
      <Contact />
      <footer
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paragraph margin="0" padding="0">
          Bill tracker ©2020 Created with{' '}
          <span role="img" aria-label="laptop">
            💻
          </span>{' '}
          by Szymon Oleszek
        </Paragraph>
      </footer>
    </>
  );
};

export default LandingPage;
