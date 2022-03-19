import React from 'react';
import { LabelType } from './type';
import { Label } from './style';

const Presenter: React.FC<LabelType> = ({ fs, cl, fw, lh, children }) => {
  return (
    <Label cl={cl} fs={fs} fw={fw} lh={lh}>
      {children}
    </Label>
  );
};

export default Presenter;
