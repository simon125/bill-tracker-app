import React, { useState, useEffect } from 'react';
import Logo from '../staticresources/logo_file.png';
import ComputerMobile from '../staticresources/computerphonedemo.png';
import './LandingPage.css';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import LoginForm from '../components/LoginForm/LoginForm';

const LandingPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const handleWindowScroll = () => {
    if (window.scrollY !== 0 && isScrolledDown === false) {
      setIsScrolledDown(true);
      debugger;
    }
    if (window.scrollY === 0 && isScrolledDown === true) {
      setIsScrolledDown(false);
      debugger;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, [isScrolledDown]);

  const handleOnChangeMode = (e: React.MouseEvent<HTMLElement>) => {
    const isLogin = e.currentTarget.getAttribute('value') === 'login';
    setIsLoginMode(isLogin);
  };
  return (
    <>
      <nav
        className={
          isScrolledDown
            ? 'navigation-container scrolled-navigation'
            : 'navigation-container'
        }
      >
        <div className="navigation">
          <img className="logo" src={Logo} alt="Bill Tracker" />
          <ul className="navigation__list-items">
            <li className="navigation__list-item">
              <a className="navigation__nav-link" href="#">
                Home
              </a>
            </li>
            <li className="navigation__list-item">
              <a className="navigation__nav-link" href="#">
                Features
              </a>
            </li>
            <li className="navigation__list-item">
              <a className="navigation__nav-link" href="#">
                Demo
              </a>
            </li>
            <li className="navigation__list-item">
              <a className="navigation__nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="showcase-container">
        <div className="showcase-container__background" />
        <div className="showcase-titles">
          <h1>
            Finally you will be know <b>on what</b> and <b>how much</b> you
            spent <b>money</b>
          </h1>
          <h3>
            Track your money in easy and safety way with <b>Bill Tracker</b>,
            just enter your expenses, bills to efficient form or take a pic then
            app will take care for the rest of things
          </h3>
          <button className="showcase-demo-button">
            Try out demo account!
          </button>
        </div>
        <div className="forms">
          <div className="switch-button__group">
            <button
              value="register"
              className={isLoginMode ? 'switch-button' : 'switch-button active'}
              onClick={handleOnChangeMode}
            >
              Register
            </button>
            <button
              value="login"
              className={isLoginMode ? 'switch-button active' : 'switch-button'}
              onClick={handleOnChangeMode}
            >
              Login
            </button>
          </div>
          {isLoginMode ? <LoginForm /> : <RegisterForm />}
        </div>

        <div className="arrow bounce">
          <a className="fa fa-arrow-down fa-2x" href="#"></a>
        </div>
      </section>
      <section className="features-container">
        <div className="features-subcontainer">
          <h2 className="features-container__title">
            <b>Tracking expenses</b> have never been such <b>easy</b> like now{' '}
            <b>with our app</b>
          </h2>
          <p className="features-container__subtitle">
            These features provide you everything what you need to track your
            money
          </p>
          <div className="features">
            <div className="feature">
              <span className="icon-wrapper">
                <span className="feature-icon fas fa-leaf fa-3x" />
              </span>
              <h3 className="feature-title">Simple UI</h3>
              <p className="feature-description">
                Simplicity and <b>power</b> in one place. Well described and
                even guided tools give you <b>much possibilities</b> with less
                activities.
              </p>
            </div>
            <div className="feature">
              <span className="icon-wrapper">
                <span className="feature-icon fas fa-camera fa-3x" />
              </span>
              <h3 className="feature-title">Photos of bills</h3>
              <p className="feature-description">
                You don't need to enter prices, dates names of shops, with this
                app you can store your bills in image format. Do shoppings, take
                bill and then take a photo of the bill.
              </p>
            </div>
            <div className="feature">
              <span className="icon-wrapper">
                <span className="feature-icon fas fa-clipboard-list fa-3x" />
              </span>
              <h3 className="feature-title">Intuitive forms</h3>
              <p className="feature-description">
                For better usage of the app we prepared efficient forms to enter
                additional information - thanks that you would have any
                information you need.
              </p>
            </div>
            <div className="feature">
              <span className="icon-wrapper">
                <span className="feature-icon far fa-chart-bar fa-3x" />
              </span>
              <h3 className="feature-title">Useful dashboards</h3>
              <p className="feature-description">
                Tables, charts and possibilities to customization - isn't that
                seems like excel? Bill Tracker contains aligned tools to show
                you stats and even more, and it's still customizable.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="demo-container">
        <div className="demo-container__content-column">
          <h3 className="demo-container__title">Demo account!</h3>
          <p className="demo-container__description">
            {' '}
            Do you want see app in action? <b>Let's try it</b> with demo
            account! It's completely <b>free!</b>
          </p>
          <p className="demo-container__description">
            Tables, charts and possibilities to customization - isn't that seems
            like excel? Bill Tracker contains aligned tools to show you stats
            and even more, and it's still customizable.
          </p>
          <p className="demo-container__description">
            Tables, charts and possibilities to customization - isn't that seems
            like excel? Bill Tracker contains aligned tools to show you stats
            and even more, and it's still customizable.
          </p>
          <button className="demo-container__button">Go to demo account</button>
        </div>
        <div className="demo-container__image-column">
          <img
            className="demo-container__image"
            src={ComputerMobile}
            alt="Mobile&Computer"
          />
        </div>
      </section>
      <section className="quote-container">
        <h4 className="quote">
          It's Not About How Much Money You Make, It's How You Control It!
        </h4>
        <button className="demo-container__button">
          Don't wait, create free account!
        </button>
      </section>
      <section className="contact-container">
        <div className="bg-layer" />
      </section>
      <footer>
        <h4>Bill tracker ©2020 Created with 💻 by Szymon Oleszek</h4>
      </footer>
    </>
  );
};

export default LandingPage;
