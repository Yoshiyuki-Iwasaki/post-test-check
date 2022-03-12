import React from 'react';
import Presenter from './presenter';
import { useSelector } from 'react-redux';
import { selectsTasks } from '../../../features/task/taskSlice';

const PostList: React.FC = () => {
  const postData = useSelector(selectsTasks);

  return <Presenter postData={postData} />;
};

export default PostList;
