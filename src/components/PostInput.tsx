import React, { useState } from 'react'
import styled from "styled-components";
import { postDataType } from "../type/data";

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
  postDate: postDataType[];
  setPostDate: any;
};

const PostInput: React.FC<PostInputType> = ({ postDate, setPostDate }) => {
  const [content, setContent] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("test");
    console.log("content", content);
    setContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content) return;
    setPostDate([
      ...postDate,
      {
        id: postDate.length + 1,
        username: `username${postDate.length + 1}`,
        date: "date",
        content: content,
      },
    ]);
    setContent("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input value={content} type="text" onChange={handleInput} />
    </Form>
  );
};

export default PostInput
