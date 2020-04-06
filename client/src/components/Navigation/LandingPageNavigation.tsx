// node modules
import React from 'react';
// local modules
import Logo from '../../staticresources/logo_file.png';

interface LandingPageNavigationProps {
  fixedNavigation: boolean;
}

const LandingPageNavigation = (props: LandingPageNavigationProps) => {
  return (
    <nav
      className={
        props.fixedNavigation
          ? 'navigation-container scrolled-navigation'
          : 'navigation-container'
      }
    >
      <div className="navigation">
        <img className="logo" src={Logo} alt="Bill Tracker" />
        <ul className="navigation__list-items">
          <li className="navigation__list-item">
            <a className="navigation__nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="navigation__list-item">
            <a className="navigation__nav-link" href="#features">
              Features
            </a>
          </li>
          <li className="navigation__list-item">
            <a className="navigation__nav-link" href="#demo">
              Demo
            </a>
          </li>
          <li className="navigation__list-item">
            <a className="navigation__nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LandingPageNavigation;
