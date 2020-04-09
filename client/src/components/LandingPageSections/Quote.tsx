import React from 'react';
import { H2, Button } from './LandingPageSection.styled';

const Quote = () => {
  return (
    <section className="quote-container">
      <H2 color="primaryLight">
        It's Not About How Much Money You Make, It's How You Control It!
      </H2>
      {/* change to anchor */}
      {/* <Button href="#home" className="demo-container__button">
        Don't wait, create free account!
      </Button> */}
    </section>
  );
};

export default Quote;
