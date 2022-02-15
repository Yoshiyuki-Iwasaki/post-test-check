import React from 'react';
import { Form, FormInput } from './styles';

const Presenter = ({ text, handleInput, handleSubmit }: any) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        value={text}
        onChange={handleInput}
        placeholder="Enter"
      />
    </Form>
  );
};

export default Presenter;
