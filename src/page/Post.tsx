import React from 'react';
import PostItem from '../components/molecules/postItem';
import data from '../postData.json';
import styled from 'styled-components';

const Content = styled.div`
  margin: 0 auto;
  width: 400px;
`;

const Post = () => {
  return (
    <>
      <Content>
        <PostItem data={data[0]} />
      </Content>
    </>
  );
};

export default Post;
