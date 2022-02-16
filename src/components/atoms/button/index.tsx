import React from 'react';
import { Props } from './type';
import { ButtonLayout } from './style';

const Button: React.FC<Props> = ({
  color = '#fff',
  children,
  ...buttonProps
}) => {
  return (
    <ButtonLayout style={{ color }} {...buttonProps}>
      {children}
    </ButtonLayout>
  );
};

export default Button;
