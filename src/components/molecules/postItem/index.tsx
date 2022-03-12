import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../../features/task/taskSlice';
import Presenter from './presenter';

const PostItem: React.FC<any> = ({ postData }) => {
  const dispatch = useDispatch();
  return (
    <Presenter
      postData={postData}
      handleRemove={() => dispatch(removeTask(postData))}
    />
  );
};

export default PostItem;
