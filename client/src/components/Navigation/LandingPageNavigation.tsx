// node modules
import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
// local modules
import Logo from '../../staticresources/logo_file.png';

interface LandingPageNavigationProps {
  fixedNavigation: boolean;
}

const LandingPageNavigation = (props: LandingPageNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
        {window.innerWidth > 900 ? (
          <ul className="navigation__list-items">
            <li className="navigation__list-item">
              <a className="navigation__nav-link" href="#hero">
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
        ) : (
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={() => {
              setIsOpen(!isOpen);
            }}
            width={window.innerWidth < 450 ? 25 : 31}
            height={window.innerWidth < 450 ? 20 : 27}
            strokeWidth={1}
            rotate={0}
            color="white"
            borderRadius={0}
            animationDuration={0.5}
          />
        )}
      </div>
    </nav>
  );
};

export default LandingPageNavigation;
