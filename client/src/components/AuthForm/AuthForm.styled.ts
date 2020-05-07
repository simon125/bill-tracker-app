import styled from 'styled-components';

interface ISwitchButton {
  readonly isLoginMode: boolean;
}

interface IAuthFormButton {
  readonly active: boolean;
}

export const FormContainer = styled.div`
  transition: height 0.5s;
  width: 100%;
  background: rgba(2, 42, 75, 0.4);
  border-radius: 3px;
  overflow: hidden;
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

  @media (max-width: 900px) {
    font-size: 23px;
    padding: 13px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const AuthFormButton = styled.button<IAuthFormButton>`
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid #fefefe;
  text-transform: uppercase;
  color: #fefefe;
  padding: 15px 0;
  margin: 20px;
  box-sizing: border-box;
  width: calc(100% - 40px);
  cursor: pointer;
  transition: background-color 0.4s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
  @media (max-width: 900px) {
    font-size: 16px;
    padding: 12px 0;
  }
  @media (max-width: 400px) {
    padding: 10px 0;

    font-size: 15px;
  }
`;
