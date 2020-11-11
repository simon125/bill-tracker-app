// node modules
import React from 'react';
// local modules
import ComputerMobile from '../../staticresources/computer2.png';
import {
  DemoContainer,
  DemoContentColumn,
  DemoImageContainer,
  H2,
  Paragraph,
  Button,
} from './LandingPageSection.styled';

const Demo = () => {
  return (
    <DemoContainer id="demo">
      <DemoContentColumn>
        <H2 margin="70px 0 10px 0" color="blueDark">
          Demo account!
        </H2>
        <Paragraph color="grey">
          {' '}
          Do you want see app in action? <b>Let's try it</b> with demo account!
          It's completely <b>free!</b>
        </Paragraph>
        <Paragraph color="grey">
          Tables, charts and possibilities to customization - isn't that seems
          like excel? Bill Tracker contains aligned tools to show you stats and
          even more, and it's still customizable.
        </Paragraph>
        <Paragraph color="grey">
          Tables, charts and possibilities to customization - isn't that seems
          like excel? Bill Tracker contains aligned tools to show you stats and
          even more, and it's still customizable.
        </Paragraph>
        <Button
          margin="20px 0 0 0"
          fontColor="blueDark"
          borderColor="blueLight"
        >
          Go to demo account
        </Button>
      </DemoContentColumn>
      <DemoImageContainer>
        <img
          style={{
            marginTop: 100,
            width: '100%',
            height: 'auto',
          }}
          src={ComputerMobile}
          alt="Mobile&Computer"
        />
      </DemoImageContainer>
    </DemoContainer>
  );
};

export default Demo;
