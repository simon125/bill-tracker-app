// node modules
import React from 'react';
// local modules
import ComputerMobile from '../../staticresources/computerphonedemo.png';
import {
  DemoContainer,
  DemoContentColumn,
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

      <img
        style={{
          position: 'relative',
          top: '-20px',
          width: '47%',
          height: 'auto',
        }}
        src={ComputerMobile}
        alt="Mobile&Computer"
      />
    </DemoContainer>
  );
};

export default Demo;
