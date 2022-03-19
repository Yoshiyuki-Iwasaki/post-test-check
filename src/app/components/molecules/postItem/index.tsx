import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask } from '../../../slice/task';
import Presenter from './presenter';
import { PostItemType } from './type';

const PostItem: React.FC<PostItemType> = ({
  removeFlag,
  postData,
  handleLike,
}) => {
  const dispatch = useDispatch();
  return (
    <Presenter
      removeFlag={removeFlag}
      postData={postData}
      handleRemove={() => dispatch(removeTask(postData))}
      handleLike={handleLike}
    />
  );
};

export default PostItem;
