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
  value,
  onChange,
  onBlur,
  onFocus,
  type = 'text',
  id,
  setValue,
  isLoginMode = false,
  isTextarea = false
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
    <div className="form-control-textarea">
      <textarea
        value={value}
        onChange={handleChange}
        autoComplete="none"
        placeholder="&nbsp;"
        // value=""
        className="control-input-textarea"
        name="emailContent"
        id="emailContent"
        cols={30}
        rows={6}
      ></textarea>
      {/* <input type="text" value="" className="control-input" /> */}
      <label className="control-label-textarea" htmlFor="emailContent">
        Email content
      </label>
    </div>
  ) : (
    <Styled.FormControl isLoginMode={isLoginMode}>
      <Styled.FormInput
        autoComplete="off"
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
