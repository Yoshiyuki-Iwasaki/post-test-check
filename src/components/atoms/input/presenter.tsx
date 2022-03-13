import React from 'react';
import { Form, FormInput } from './styles';
import { InputType } from './type';

const Presenter: React.FC<InputType> = ({
  register,
  handleCreate,
  handleSubmit,
}) => {
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
