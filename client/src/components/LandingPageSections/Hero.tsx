// node modules
import React from 'react';
// local modules
import BounceArrow from '../BounceArrow/BounceArrow';
import AuthForm from '../AuthForm/AuthForm';
import { ContainerImageBg } from './LandingPageSection.styled';

interface HeroProps {
  isScrolledDown: boolean;
}

const BounceArrowStyle: React.CSSProperties = {
  position: 'absolute',
  left: '50%',
  top: '95%',
  zIndex: 4,
  transition: 'all 0.4s'
};

const Hero = (props: HeroProps) => {
  return (
    // <section id="home" className="showcase-container">
    <ContainerImageBg flexColumn={false} id="home">
      <div className="showcase-container__background" />
      <div className="showcase-titles">
        <h1>
          Finally you will be know <b>on what</b> and <b>how much</b> you spent{' '}
          <b>money</b>
        </h1>
        <h3>
          Track your money in easy and safety way with <b>Bill Tracker</b>, just
          enter your expenses, bills to efficient form or take a pic then app
          will take care for the rest of things
        </h3>
        <button className="showcase-demo-button">Try out demo account!</button>
      </div>

      {/*isLogedin &&*/ true && <AuthForm />}
      <BounceArrow
        style={{
          ...BounceArrowStyle,
          opacity: props.isScrolledDown ? 0 : 1,
          pointerEvents: props.isScrolledDown ? 'none' : 'auto'
        }}
      />
    </ContainerImageBg>
    // </section>
  );
};

export default Hero;
