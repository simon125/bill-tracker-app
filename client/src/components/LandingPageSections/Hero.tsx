// node modules
import React from 'react';
// local modules
import { Button } from './LandingPageSection.styled';
import BounceArrow from '../BounceArrow/BounceArrow';
import AuthForm from '../AuthForm/AuthForm';
import {
  HeroContainer,
  ColorLayer,
  SectionColumn,
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
  display: window.innerWidth <= 750 ? 'none' : '',
};

const Hero = (props: HeroProps) => {
  return (
    // Here change home to hero
    // TODO: change name to Hero container
    <HeroContainer containerHeight="high" flexColumn={false} id="hero">
      <ColorLayer />
      <div
        style={{
          maxWidth: 1400,
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <SectionColumn>
          <H1>
            Finally you will be know <b>on what</b> and <b>how much</b> you
            spent <b>money</b>
          </H1>
          <H3>
            Track your money in easy and safety way with <b>Bill Tracker</b>,
            just enter your expenses, bills to efficient form or take a pic then
            app will take care for the rest of things
          </H3>
          <Button
            margin="40px 0 0 0"
            fontColor="light"
            borderColor="blueLight"
            theme="primary"
          >
            Try out demo account!
          </Button>
        </SectionColumn>

        {
          /*isLogedin &&*/ true && (
            <SectionColumn>
              <AuthForm />
            </SectionColumn>
          )
        }
        <BounceArrow
          style={{
            ...BounceArrowStyle,
            opacity: props.isScrolledDown ? 0 : 1,
            pointerEvents: props.isScrolledDown ? 'none' : 'auto',
          }}
        />
      </div>
    </HeroContainer>
    // </section>
  );
};

export default Hero;
