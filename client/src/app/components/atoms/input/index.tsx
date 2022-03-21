import React, { FC } from 'react';
import Presenter from './presenter';
import { InputType } from './type';

const Input: FC<InputType> = ({
  register,
  handleSubmit,
  handleCreate,
  value,
}) => {
  return (
    <Presenter
      value={value}
      register={register}
      handleCreate={handleCreate}
      handleSubmit={handleSubmit}
    />
  );
};

export default Input;
