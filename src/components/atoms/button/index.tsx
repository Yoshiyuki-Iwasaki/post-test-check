import React from 'react';
import { Props } from './type';
import { ButtonLayout } from './style';

const Button: React.FC<Props> = ({ children, ...buttonProps }) => {
  return <ButtonLayout {...buttonProps}>{children}</ButtonLayout>;
};

export default Button;
