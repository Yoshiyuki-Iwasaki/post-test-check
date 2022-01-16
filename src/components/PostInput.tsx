import React from 'react'
import styled from "styled-components";
import { postDataType } from "../type/data";
import useInput from "../hooks/useInput";

const Form = styled.form`
  margin: 0 auto;
  padding: 20px 0 0 0;
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
  const attrs = useInput("");

  console.log('attrs', attrs);
  console.log('attrs.value', attrs.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!attrs.value) return;
    setPostData([
      ...postData,
      {
        id: postData.length + 1,
        username: `username${postData.length + 1}`,
        date: "date",
        content: attrs.value,
      },
    ]);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" {...attrs} />
    </Form>
  );
};

export default PostInput
