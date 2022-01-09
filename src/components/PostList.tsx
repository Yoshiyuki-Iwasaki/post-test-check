import React from 'react'
import PostItem from './PostItem'
import PostInput from "./PostInput";
import styled from "styled-components";
import data from '../data.json';

const Main = styled.ul`
  background: #fff;
  margin: 20px auto 0;
  width: 400px;
`;

const PostList = () => {
  return (
    <>
      <PostInput />
      <Main>
        {data &&
          data.map((data: any, index: number) => (
            <PostItem key={index} data={data} />
          ))}
      </Main>
    </>
  );
}

export default PostList
