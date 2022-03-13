import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../../features/task/taskSlice';
import Presenter from './presenter';
import { PostItemType } from './type';

const PostItem: React.FC<PostItemType> = ({ postData, handleLike }) => {
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
