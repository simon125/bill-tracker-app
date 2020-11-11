// node modules
import React, { useState } from 'react';
// local modules
import { FormControl } from '../FormControl/FormControl';
import { EmailContainer } from './EmailForm.styled';
// import {Styled} from './EmailFormStyle';
import { AuthFormButton as Button } from '../AuthForm/AuthForm.styled';

const EmilForm = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [emailContent, setEmailContent] = useState('');

  return (
    <EmailContainer>
      <FormControl
        label="Email address"
        value={emailAddress}
        id="emailAddress"
        setValue={setEmailAddress}
      />
      <FormControl
        isTextarea={true}
        label="Email content"
        value={emailContent}
        id="emailContent"
        setValue={setEmailContent}
      />

      <Button active={true}>Send email</Button>
    </EmailContainer>
  );
};

export default EmilForm;
