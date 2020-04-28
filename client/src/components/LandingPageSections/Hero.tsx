// node modules
import React from 'react';
// local modules
import { Button } from './LandingPageSection.styled';
import BounceArrow from '../BounceArrow/BounceArrow';
import AuthForm from '../AuthForm/AuthForm';
import {
  ContainerImageBg,
  ColorLayer,
  SloganContainer,
  H1,
  H3,
} from './LandingPageSection.styled';

interface HeroProps {
  isScrolledDown: boolean;
}

const BounceArrowStyle: React.CSSProperties = {
  position: 'absolute',
  left: '50%',
  top: '95%',
  zIndex: 4,
  transition: 'all 0.4s',
};

const Hero = (props: HeroProps) => {
  return (
    // Here change home to hero
    <ContainerImageBg containerHeight="high" flexColumn={false} id="hero">
      <ColorLayer />
      <SloganContainer>
        <H1>
          Finally you will be know <b>on what</b> and <b>how much</b> you spent{' '}
          <b>money</b>
        </H1>
        <H3>
          Track your money in easy and safety way with <b>Bill Tracker</b>, just
          enter your expenses, bills to efficient form or take a pic then app
          will take care for the rest of things
        </H3>
        <Button
          margin="40px 0 0 0"
          fontColor="light"
          borderColor="blueLight"
          theme="primary"
        >
          Try out demo account!
        </Button>
      </SloganContainer>

      {/*isLogedin &&*/ true && <AuthForm />}
      <BounceArrow
        style={{
          ...BounceArrowStyle,
          opacity: props.isScrolledDown ? 0 : 1,
          pointerEvents: props.isScrolledDown ? 'none' : 'auto',
        }}
      />
    </ContainerImageBg>
    // </section>
  );
};

export default Hero;
