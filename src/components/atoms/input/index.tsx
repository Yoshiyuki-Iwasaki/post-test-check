import React, { useState } from 'react';
import { Form, FormInput } from './styles';
import { PostInputType } from './type';
import { useForm } from './hooks';

const Input: React.FC<PostInputType> = ({ postData, setPostData }) => {
  const { text, handleInput, handleSubmit } = useForm({
    postData,
    setPostData,
  });

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

export default Input;
