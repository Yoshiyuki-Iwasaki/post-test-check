import { useState } from 'react'
import styled from "styled-components";

const Form = styled.form`
  margin: 0 auto;
  padding: 20px 0 0 0;
  width: 400px;
`;
const Input = styled.input`
  width: 100%;
  height: 80px;
`;

const PostInput = ({ postDate, setPostDate }: any) => {
  const [content, setContent] = useState<string>("");

  const handleInput = (e: any) => {
    e.preventDefault();
    console.log("test");
    console.log("content", content);
    setContent(e.target.value);
  };

  const handleSubmit = (e: any) => {
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
