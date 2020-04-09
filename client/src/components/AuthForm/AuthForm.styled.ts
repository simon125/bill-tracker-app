import styled from 'styled-components';

interface ISwitchButton {
  readonly isLoginMode: boolean;
}

interface IAuthFormButton {
  readonly active: boolean;
}

export const FormContainer = styled.div`
  height: fit-content;
  transition: height 0.5s;
  width: 30%;
  min-height: 350px;
  position: relative;
  z-index: 2;
  background: rgba(2, 42, 75, 0.4);
  border-radius: 3px;
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 40%;
  }
`;

export const SwitchButton = styled.button<ISwitchButton>`
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

export const AuthFormButton = styled.button<IAuthFormButton>`
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
