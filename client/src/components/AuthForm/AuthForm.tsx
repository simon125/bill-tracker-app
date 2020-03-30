// node modules
import React, { useState, useEffect } from 'react';

// local modules
import { Styled } from '../common-styled-components/common-styled-components';
import { FormControl } from '../FormControl/FormControl';

const checkIfAlreadyRegister = () => {
  if (localStorage.getItem('bill-tracker-account')) {
    return true;
  }
  return false;
};

const AuthForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(checkIfAlreadyRegister());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleOnChangeMode = (e: React.MouseEvent<HTMLElement>) => {
    const isLogin = e.currentTarget.getAttribute('value') === 'login';
    setIsLoginMode(isLogin);
  };

  const handleAuthSubmit = () => {
    console.log(123);
  };

  return (
    <div className="forms">
      <div className="switch-button__group">
        <Styled.SwitchButton
          value="register"
          isLoginMode={!isLoginMode}
          onClick={handleOnChangeMode}
        >
          Register
        </Styled.SwitchButton>
        <Styled.SwitchButton
          value="login"
          isLoginMode={isLoginMode}
          onClick={handleOnChangeMode}
        >
          Login
        </Styled.SwitchButton>
      </div>
      <form autoComplete="off">
        <FormControl
          value={name}
          setValue={setName}
          id={'name'}
          label={'Name'}
          isLoginMode={isLoginMode}
        />

        <FormControl
          value={email}
          setValue={setEmail}
          id={'email'}
          label={'Email'}
        />
        <FormControl
          value={password}
          setValue={setPassword}
          id={'password'}
          label={'Password'}
        />
        <FormControl
          value={password2}
          setValue={setPassword2}
          id={'password2'}
          label={'Repeat password'}
          isLoginMode={isLoginMode}
        />

        {/* <div className="form-control">
                <input value=""  type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div> */}
        <Styled.AuthFormButton active={true} onClick={handleAuthSubmit}>
          {isLoginMode ? 'Login' : 'Register'}
        </Styled.AuthFormButton>
      </form>
    </div>
  );
};

export default AuthForm;
