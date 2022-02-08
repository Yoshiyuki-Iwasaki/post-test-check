import React from 'react';
import { FollowButton } from './styles';
import { useFollow } from './hooks';

const Follow = () => {
  const { followState, handleFollow } = useFollow();
  return (
    <FollowButton data-testid="follow" onClick={handleFollow}>
      {followState ? 'フォロー削除' : 'フォロー'}
    </FollowButton>
  );
};

export default Follow;
