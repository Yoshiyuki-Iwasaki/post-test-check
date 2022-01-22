import React, { useState } from 'react';
import styled from 'styled-components';
import { postDataType } from '../type/data';

const Form = styled.form`
  margin: 0 auto;
  width: 400px;
`;
const Input = styled.input`
  width: 100%;
  height: 80px;
`;

type PostInputType = {
  postData: postDataType[];
  setPostData: any;
};

const PostInput: React.FC<PostInputType> = ({ postData, setPostData }) => {
  const [text, setText] = useState<string>('');

  const handleInput = (e: any) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;
    setPostData([
      ...postData,
      {
        id: postData.length + 1,
        username: `username${postData.length + 1}`,
        date: 'date',
        content: text,
      },
    ]);
    setText('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={text}
        onChange={handleInput}
        placeholder="Enter"
      />
    </Form>
  );
};

export default PostInput;
