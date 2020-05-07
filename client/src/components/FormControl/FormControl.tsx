import React from 'react';
import { Styled } from './FormControl.styled';

interface IFromControlProps {
  label: string;
  value: string;
  type?: string;
  id: string;
  isLoginMode?: boolean;
  isTextarea?: boolean;
  onChange?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  setValue: (value: string) => void;
}

export const FormControl: React.FunctionComponent<IFromControlProps> = ({
  label,
  value = '',
  onChange,
  onBlur,
  onFocus,
  type = 'text',
  id,
  setValue,
  isLoginMode = false,
  isTextarea = false,
}) => {
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setValue(value);
    if (onChange) {
      onChange();
    }
  };

  return isTextarea ? (
    <Styled.Container>
      <Styled.Textarea
        value={value}
        onChange={handleChange}
        autoComplete="none"
        placeholder="&nbsp;"
        name="emailContent"
        id="emailContent"
        cols={30}
        rows={6}
      ></Styled.Textarea>
      <Styled.TextareaLabel htmlFor="emailContent">
        Email content
      </Styled.TextareaLabel>
    </Styled.Container>
  ) : (
    <Styled.FormControl isLoginMode={isLoginMode}>
      <Styled.FormInput
        autoComplete="off"
        placeholder=""
        value={value}
        id={id}
        name={id}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        type={type}
      />
      <Styled.Label htmlFor={id}>{label}</Styled.Label>
    </Styled.FormControl>
  );
};
