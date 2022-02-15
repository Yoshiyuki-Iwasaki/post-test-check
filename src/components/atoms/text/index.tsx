import React from 'react';
import { Props } from './type';

const Text: React.FC<Props> = ({ fontSize, color, children }) => {
  return <p style={{ fontSize, color }}>{children}</p>;
};

export default Text;
