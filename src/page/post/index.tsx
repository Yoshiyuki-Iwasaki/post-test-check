import React from 'react';
import PostItem from '../../components/molecules/postItem';
import { useSelector } from 'react-redux';
import { selectsTasks } from '../../slice/task/selector';
import { Content } from './style';

const Post: React.FC = () => {
  const postData = useSelector(selectsTasks);
  return (
    <Content>
      <PostItem postData={postData[0]} handleLike={''} />
    </Content>
  );
};

export default Post;
