import styled from 'styled-components';

interface IFormControl {
  readonly isLoginMode: boolean;
}

const FormControl = styled.div<IFormControl>`
  color: #fefefe;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.15s ease-in-out;
  overflow: hidden;
  padding: ${(props) => (props.isLoginMode ? '0 20px' : '18px 20px')};
  height: ${(props) => (props.isLoginMode ? 0 : 'fit-content')};
  opacity: ${(props) => (props.isLoginMode ? 0 : 1)};
`;
const FormInput = styled.input`
  background: transparent;
  border: none;
  border: 1px solid #2180c0;
  border-radius: 4px;
  padding: 5px 0 5px 15px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.4px;
`;
const Label = styled.label`
  position: absolute;
  top: 24px;
  left: 34px;
  letter-spacing: 0.5px;
  font-size: 15px;
  margin-bottom: 5px;
  transition: all 0.15s ease-in-out;

  ${FormInput}:focus ~ &,
  ${FormInput}:not([value='']) ~ & {
    transform: scale(0.9);
    top: -7px;
    left: 26px;
  }
`;
const Container = styled.div`
  color: #fefefe;
  display: flex;
  flex-direction: column;
  padding: 18px 20px;
  position: relative;
`;

const Textarea = styled.textarea`
  background: transparent;
  border: none;
  border: 1px solid #2180c0;
  border-radius: 4px;
  padding: 5px 0 5px 15px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.4px;
`;
const TextareaLabel = styled.label`
  position: absolute;
  top: 26px;
  left: 34px;
  letter-spacing: 0.5px;
  font-size: 15px;
  margin-bottom: 5px;
  transition: all 0.15s;
  ${Textarea}:focus ~ &,
  ${Textarea}:not(:placeholder-shown) ~ & 
  {
    transform: scale(0.9);
    top: -7px;
    left: 26px;
  }
`;

// .control-input-textarea:not([value='']) + .control-label-textarea */
// .control-input-textarea:focus + .control-label-textarea,
// .control-input-textarea:not(:placeholder-shown) + .control-label-textarea {
//   transform: scale(0.9);
//   top: -8px;
//   left: 27px;
// }
export const Styled = {
  FormControl,
  FormInput,
  Label,
  Textarea,
  TextareaLabel,
  Container,
};

/*
.form-control-textarea {

}

.control-label-textarea {

}

// .control-input-textarea {
//   background: transparent;
//   border: none;
//   border: 1px solid #2180c0;
//   border-radius: 4px;
//   padding: 5px 0 5px 15px;
//   font-size: 16px;
//   font-weight: bold;
//   letter-spacing: 0.4px;
// }
// */
