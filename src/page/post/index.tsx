import React from 'react';
import PostItem from '../../components/molecules/postItem';
import { Content } from './style';

const Post = () => {
  return (
    <Content>
      <PostItem postData={''} handleLike={''} />
    </Content>
  );
};

export default Post;
