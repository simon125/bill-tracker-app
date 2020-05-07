import React from 'react';

import {
  H2,
  H3,
  H4,
  Paragraph,
  Feature,
  FeaturesContainer,
  FeatureSubContainer,
  FeatureIconWrapper,
  FeatureIcon,
} from './LandingPageSection.styled';

const Features = () => {
  return (
    <section
      id="features"
      style={{ width: '70%', margin: '0 auto', padding: '100px 0' }}
    >
      <H2 color="blueDark" align="center">
        <b>Tracking expenses</b> have never been such <b>easy</b> like now{' '}
        <b>with our app</b>
      </H2>
      <H3 color="blueDark" align="center">
        These features provide you everything what you need to track your money
      </H3>
      <div
        style={{ margin: '70px 0 180px 0', border: '0.5px solid #d8dcdf' }}
      />
      <FeaturesContainer>
        <FeatureSubContainer>
          <Feature>
            <FeatureIconWrapper>
              <FeatureIcon className="fas fa-leaf fa-3x" />
            </FeatureIconWrapper>
            <H4 margin="100px 0 15px 0 " color="blueDark">
              Simple UI
            </H4>
            <Paragraph color="grey">
              Simplicity and <b>power</b> in one place. Well described and even
              guided tools give you <b>much possibilities</b> with less
              activities.
            </Paragraph>
          </Feature>
          <Feature>
            <FeatureIconWrapper>
              <FeatureIcon className="fas fa-camera fa-3x" />
            </FeatureIconWrapper>
            <H4 margin="100px 0 15px 0 " color="blueDark">
              Photos of bills
            </H4>
            <Paragraph color="grey">
              You don't need to enter prices, dates names of shops, with this
              app you can store your bills in image format. Do shoppings, take
              bill and then take a photo of the bill.
            </Paragraph>
          </Feature>
        </FeatureSubContainer>
        <FeatureSubContainer>
          <Feature>
            <FeatureIconWrapper>
              <FeatureIcon className="fas fa-clipboard-list fa-3x" />
            </FeatureIconWrapper>
            <H4 margin="100px 0 15px 0 " color="blueDark">
              Intuitive forms{' '}
            </H4>
            <Paragraph color="grey">
              For better usage of the app we prepared efficient forms to enter
              additional information - thanks that you would have any
              information you need.
            </Paragraph>
          </Feature>
          <Feature>
            <FeatureIconWrapper>
              <FeatureIcon className="far fa-chart-bar fa-3x" />
            </FeatureIconWrapper>
            <H4 margin="100px 0 15px 0 " color="blueDark">
              Useful dashboards{' '}
            </H4>
            <Paragraph color="grey">
              Tables, charts and possibilities to customization - isn't that
              seems like excel? Bill Tracker contains aligned tools to show you
              stats and even more, and it's still customizable.
            </Paragraph>
          </Feature>
        </FeatureSubContainer>
      </FeaturesContainer>
    </section>
  );
};

export default Features;
