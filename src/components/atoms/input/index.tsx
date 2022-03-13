import React from 'react';
import Presenter from './presenter';

type InputType = {
  register?: any;
  handleSubmit?: any;
  handleCreate?: any;
};

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
