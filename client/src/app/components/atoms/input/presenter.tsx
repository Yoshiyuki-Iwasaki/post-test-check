import React, { FC } from 'react';
import { Form, FormInput } from './style';
import { InputType } from './type';

const Presenter: FC<InputType> = ({
  register,
  handleCreate,
  handleSubmit,
  value,
}) => {
  return (
    <Form onSubmit={handleSubmit(handleCreate)}>
      <FormInput
        type="text"
        data-testid="input"
        {...register(value, { required: true })}
      />
    </Form>
  );
};

export default Presenter;
