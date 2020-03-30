// import Reat from 'react';
import styled from 'styled-components';

interface IAuthFormButton {
  readonly active: boolean;
}

interface ISwitchButton {
  readonly isLoginMode: boolean;
}

// interface ICommonStyledComponents {
//   AuthFormButton: IAuthFormButton;
//   SwitchButton: ISwitchButton;
// }

const AuthFormButton = styled.button<IAuthFormButton>`
  padding: 15px 0;
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid #fefefe;
  text-transform: uppercase;
  color: #fefefe;
  margin: 20px;
  box-sizing: border-box;
  width: calc(100% - 40px);
  cursor: pointer;
  transition: background-color 0.4s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const SwitchButton = styled.button<ISwitchButton>`
  background: transparent;
  box-sizing: border-box;
  border: ${(props) => (props.isLoginMode ? 'none' : '1px solid #2180c0')};
  border-radius: 2px;
  color: ${(props) => (props.isLoginMode ? '#fefefe' : '#2180c0')};
  font-size: 30px;
  padding: 20px;
  width: 50%;
  cursor: pointer;
  outline: transparent;
`;

export const Styled = {
  AuthFormButton,
  SwitchButton
};
