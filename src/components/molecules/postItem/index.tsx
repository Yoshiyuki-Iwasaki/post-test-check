import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../../features/task/taskSlice';
import Presenter from './presenter';

const PostItem: React.FC<any> = ({ postData, handleLike }) => {
  const dispatch = useDispatch();
  return (
    <Presenter
      postData={postData}
      handleRemove={() => dispatch(removeTask(postData))}
      handleLike={handleLike}
    />
  );
};

export default PostItem;
