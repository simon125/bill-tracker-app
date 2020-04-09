import React from 'react';

import { H2, H3, H4, Paragraph } from './LandingPageSection.styled';

const Features = () => {
  return (
    <section id="features" className="features-container">
      <div className="features-subcontainer">
        <H2 color="primaryLight">
          {/* <H2 className="features-container__title"> */}
          <b>Tracking expenses</b> have never been such <b>easy</b> like now{' '}
          <b>with our app</b>
        </H2>
        <H3 color="primaryDark">
          These features provide you everything what you need to track your
          money
        </H3>
        <div className="features">
          <div className="feature">
            <span className="icon-wrapper">
              <span className="feature-icon fas fa-leaf fa-3x" />
            </span>
            <H4>Simple UI</H4>
            <Paragraph>
              Simplicity and <b>power</b> in one place. Well described and even
              guided tools give you <b>much possibilities</b> with less
              activities.
            </Paragraph>
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
              seems like excel? Bill Tracker contains aligned tools to show you
              stats and even more, and it's still customizable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
