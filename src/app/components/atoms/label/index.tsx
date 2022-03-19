import React from 'react';
import { LabelType } from './type';

const Label: React.FC<LabelType> = ({ fontSize, color, children }) => {
  return <p style={{ fontSize, color }}>{children}</p>;
};

export default Label;
