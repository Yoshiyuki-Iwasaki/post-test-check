import React from 'react';
import { Form, FormInput } from './styles';

const Presenter = ({ register, handleCreate, handleSubmit }: any) => {
  return (
    <Form onSubmit={handleSubmit(handleCreate)}>
      <FormInput
        type="text"
        data-testid="input"
        {...register('taskTitle', { required: true })}
      />
    </Form>
  );
};

export default Presenter;
