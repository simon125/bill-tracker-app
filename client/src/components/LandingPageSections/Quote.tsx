import React from 'react';
import { H2, Button } from './LandingPageSection.styled';

const Quote = () => {
  return (
    <section style={{ textAlign: 'center', margin: '100px 0' }}>
      <H2 color="blueDark" margin="0 0 40px 0">
        It's Not About How Much Money You Make, It's How You Control It!
      </H2>
      <Button href="#hero" as="a" fontColor="blueDark" borderColor="blueLight">
        Don't wait, create free account!
      </Button>
    </section>
  );
};

export default Quote;
