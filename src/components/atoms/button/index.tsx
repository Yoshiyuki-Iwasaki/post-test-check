import React from 'react';
import { Props } from './type';

const Button: React.FC<Props> = ({
  color = 'red',
  children,
  ...buttonProps
}) => {
  return (
    <button style={{ color }} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
