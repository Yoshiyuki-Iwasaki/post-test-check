import React from 'react';
import { ButtonType } from './type';
import { ButtonLayout } from './style';

const Button: React.FC<ButtonType> = ({ children, ...buttonProps }) => {
  return <ButtonLayout {...buttonProps}>{children}</ButtonLayout>;
};

export default Button;
