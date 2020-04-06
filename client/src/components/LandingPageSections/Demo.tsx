// node modules
import React from 'react';
// local modules
import ComputerMobile from '../../staticresources/computerphonedemo.png';

const Demo = () => {
  return (
    <section id="demo" className="demo-container">
      <div className="demo-container__content-column">
        <h3 className="demo-container__title">Demo account!</h3>
        <p className="demo-container__description">
          {' '}
          Do you want see app in action? <b>Let's try it</b> with demo account!
          It's completely <b>free!</b>
        </p>
        <p className="demo-container__description">
          Tables, charts and possibilities to customization - isn't that seems
          like excel? Bill Tracker contains aligned tools to show you stats and
          even more, and it's still customizable.
        </p>
        <p className="demo-container__description">
          Tables, charts and possibilities to customization - isn't that seems
          like excel? Bill Tracker contains aligned tools to show you stats and
          even more, and it's still customizable.
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
  );
};

export default Demo;
