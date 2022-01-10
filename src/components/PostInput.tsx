import React, { useState } from 'react'
import styled from "styled-components";
import data from "../data.json";

const Form = styled.form`
  margin: 0 auto;
  padding: 20px 0 0 0;
  width: 400px;
`;
const Input = styled.input`
  width: 100%;
  height: 80px;
`;

const PostInput = () => {
  const [content, setContent] = useState<string>('');

  const handleInput = (e: any) => {
    e.preventDefault();
    console.log('test');
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setContent('');
    // data.push
    console.log("test");
  };

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Input type="text" onClick={e => handleInput(e)} />
    </Form>
  );
}

export default PostInput
