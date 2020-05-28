// node modules
import React, { useState } from 'react';

// local modules
import { SwitchButton, FormContainer, AuthFormButton } from './AuthForm.styled';
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
    <FormContainer>
      <div>
        <SwitchButton
          value="register"
          isLoginMode={!isLoginMode}
          onClick={handleOnChangeMode}
        >
          Register
        </SwitchButton>
        <SwitchButton
          value="login"
          isLoginMode={isLoginMode}
          onClick={handleOnChangeMode}
        >
          Login
        </SwitchButton>
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
        <AuthFormButton active={true} onClick={handleAuthSubmit}>
          {isLoginMode ? 'Login' : 'Register'}
        </AuthFormButton>
      </form>
    </FormContainer>
  );
};

export default AuthForm;
