import React from 'react';
import PostItem from '../../components/molecules/postItem';
import data from '../../postData.json';
import { Content } from './style';

const Post = () => {
  return (
    <Content>
      <PostItem data={data[0]} />
    </Content>
  );
};

export default Post;
