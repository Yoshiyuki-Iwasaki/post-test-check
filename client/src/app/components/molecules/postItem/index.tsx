import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { appActions } from '../../../slice/task';
import Presenter from './presenter';
import { PostItemType } from './type';

const PostItem: FC<PostItemType> = ({ removeFlag, postData, handleLike }) => {
  const dispatch = useDispatch();
  return (
    <Presenter
      removeFlag={removeFlag}
      postData={postData}
      handleRemove={() => dispatch(appActions.removeTask(postData))}
      handleLike={handleLike}
    />
  );
};

export default PostItem;
