import React, { useState } from 'react';
import styled from 'styled-components';

const FollowArea = styled.div`
  margin-top: 10px;
  text-align: center;
`;
const FollowButton = styled.button`
  font-size: 14px;
`;

const Follow = () => {
  const [followState, setFollowState] = useState(false);

  const handleFollow = () => {
    console.log('Follow');
    setFollowState(true);
  };

  const handleUnFollow = () => {
    console.log('UnFollow');
    setFollowState(false);
  };
  return (
    <FollowArea>
      {followState ? (
        <FollowButton data-testid="unfollow" onClick={handleUnFollow}>
          フォロー削除
        </FollowButton>
      ) : (
        <FollowButton data-testid="follow" onClick={handleFollow}>
          フォロー
        </FollowButton>
      )}
    </FollowArea>
  );
};

export default Follow;
