import React, { useEffect,useState } from 'react'
import PostItem from './PostItem'
import PostInput from "./PostInput";
import styled from "styled-components";
import data from '../data.json';

const Main = styled.ul`
  margin: 20px auto 0;
  background: #fff;
  height: 600px;
  overflow: scroll;
}
`;

const PostList = () => {
  const [postDate, setPostDate] = useState<any>([]);

  useEffect(() => {
    setPostDate(data);
  }, []);

  return (
    <>
      <PostInput
        postDate={postDate}
        setPostDate={setPostDate}
      />
      <Main>
        {postDate &&
          postDate.map((data: any, index: number) => (
            <PostItem key={index} data={data} />
          ))}
      </Main>
    </>
  );
}

export default PostList
