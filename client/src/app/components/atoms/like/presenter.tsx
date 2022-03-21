import React, { FC } from 'react';
import { LikeButton } from './styles';
import { LikeType } from './type';

const Presenter: FC<LikeType> = ({ postData, handleLike }) => {
  return (
    <LikeButton
      likedFlag={postData.likeState}
      data-testid="like"
      onClick={() => handleLike(postData)}
    >
      {postData.likeCount}
    </LikeButton>
  );
};

export default Presenter;
