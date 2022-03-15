import React from 'react';
import Presenter from './presenter';
import { InputType } from './type';

const Input: React.FC<InputType> = ({
  register,
  handleSubmit,
  handleCreate,
}) => {
  return (
    <Presenter
      register={register}
      handleCreate={handleCreate}
      handleSubmit={handleSubmit}
    />
  );
};

export default Input;
