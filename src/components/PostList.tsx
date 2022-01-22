import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';
import PostInput from './PostInput';
import styled from 'styled-components';
import data from '../postData.json';
import { postDataType } from '../type/data';

const Main = styled.ul`
  margin: 20px auto 0;
  background: #fff;
  height: calc(100vh - 200px);
  overflow: scroll;
}`;

const PostList: React.FC = () => {
  const [postData, setPostData] = useState<postDataType[]>([]);

  useEffect(() => {
    setPostData(data);
  }, []);

  return (
    <>
      <PostInput postData={postData} setPostData={setPostData} />
      <Main>
        {postData &&
          postData.map((data: postDataType, index: number) => (
            <PostItem
              key={index}
              postData={postData}
              setPostData={setPostData}
              data={data}
            />
          ))}
      </Main>
    </>
  );
};

export default PostList;
