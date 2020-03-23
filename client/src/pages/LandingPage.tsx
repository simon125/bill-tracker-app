import React, { useState } from 'react';
import Logo from '../staticresources/logo_file.png';
import './LandingPage.css';

const LandingPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const handleOnChangeMode = () => {
    setIsLoginMode(!isLoginMode);
  };
  return (
    <>
      <nav className="navigation-container">
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
              className="switch-button active"
              onClick={handleOnChangeMode}
            >
              Register
            </button>
            <button className="switch-button" onClick={handleOnChangeMode}>
              Login
            </button>
          </div>
          {!isLoginMode ? (
            <form>
              <div className="form-control">
                <label className="control-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="control-input"
                  id="name"
                  name="name"
                  type="text"
                />
              </div>
              <div className="form-control">
                <label className="control-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="control-input"
                  id="email"
                  name="email"
                  type="text"
                />
              </div>
              <div className="form-control">
                <label className="control-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="control-input"
                  id="password"
                  name="password"
                  type="password"
                />
              </div>
              <div className="form-control">
                <label className="control-label" htmlFor="password2">
                  Repeat password
                </label>
                <input
                  className="control-input"
                  id="password2"
                  name="password2"
                  type="password"
                />
              </div>
              {/* <div className="form-control">
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div> */}
              <button className="submit-button">Register</button>
            </form>
          ) : (
            <form>
              <div className="form-control">
                <label className="control-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="control-input"
                  id="email"
                  name="email"
                  type="text"
                />
              </div>
              <div className="form-control">
                <label className="control-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="control-input"
                  id="password"
                  name="password"
                  type="password"
                />
              </div>
              <div className="form-control">
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <button>Login</button>
            </form>
          )}
        </div>

        <div className="arrow bounce">
          <a className="fa fa-arrow-down fa-2x" href="#"></a>
        </div>
      </section>
      <section className="features-container">
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi?
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div>feature1</div>
        <div>feature2</div>
        <div>feature3</div>
        <div>feature4</div>
      </section>
      <section className="demo-container">
        <div>
          <h3>Let's try it!</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
            aperiam nam. Tempora reprehenderit officia, praesentium blanditiis
            eligendi perferendis hic sequi.
          </p>
          <button>Go to demo account</button>
        </div>
        <div>IMG of Computer</div>
      </section>
      <section className="contact-container">contact</section>
    </>
  );
};

export default LandingPage;
