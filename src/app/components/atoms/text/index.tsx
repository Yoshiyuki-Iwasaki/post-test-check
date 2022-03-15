import React from 'react';
import { TextType } from './type';

const Text: React.FC<TextType> = ({ fontSize, color, children }) => {
  return <p style={{ fontSize, color }}>{children}</p>;
};

export default Text;
