import React from 'react';
import { PostInputType } from './type';
import { useForm } from './hooks';
import Presenter from './presenter';

const Input: React.FC<PostInputType> = ({ postData, setPostData }) => {
  const { text, handleInput, handleSubmit } = useForm({
    postData,
    setPostData,
  });

  return (
    <Presenter
      text={text}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    />
  );
};

export default Input;
