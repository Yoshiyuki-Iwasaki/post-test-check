import React from 'react';
import Presenter from './presenter';

const Input: React.FC<any> = ({ register, handleSubmit, handleCreate }) => {
  return (
    <Presenter
      register={register}
      handleCreate={handleCreate}
      handleSubmit={handleSubmit}
    />
  );
};

export default Input;
