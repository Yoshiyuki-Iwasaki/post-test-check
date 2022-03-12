import React from 'react';
// import { PostInputType } from './type';
import { useForm } from 'react-hook-form';
import Presenter from './presenter';
import { useDispatch } from 'react-redux';
import { createTask } from '../../../features/task/taskSlice';

const Input: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const handleCreate = (data: any) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };

  return (
    <Presenter
      register={register}
      handleCreate={handleCreate}
      handleSubmit={handleSubmit}
    />
  );
};

export default Input;
