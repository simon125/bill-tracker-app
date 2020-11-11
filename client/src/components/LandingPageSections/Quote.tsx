import React from 'react';
import { H2, H3, Button, QuoteContainer } from './LandingPageSection.styled';

const Quote = () => {
  return (
    <QuoteContainer>
      <H2 color="blueDark" margin="0 0 40px 0">
        It's Not About How Much Money You Make, It's How You Control It!
      </H2>

      <H3 color="blueDark" margin="0 0 40px 0">
        Don't wait
      </H3>
      <Button href="#hero" as="a" fontColor="blueDark" borderColor="blueLight">
        Create free account!
      </Button>
    </QuoteContainer>
  );
};

export default Quote;
