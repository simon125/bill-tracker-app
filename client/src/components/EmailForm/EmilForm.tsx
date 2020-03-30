// node modules
import React, { useState } from 'react';
// local modules
import { FormControl } from '../FormControl/FormControl';
// import {Styled} from './EmailFormStyle';

const EmilForm = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [emailContent, setEmailContent] = useState('');

  return (
    <div className="contact-container__col email-form">
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

      <button className="submit-button">Send email</button>
    </div>
  );
};

export default EmilForm;
