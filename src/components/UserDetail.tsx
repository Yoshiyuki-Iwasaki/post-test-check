import React, { useState } from 'react'
import styled from "styled-components";

const Icon = styled.p`
  margin: 0 auto;
  width: 70px;
  height: 70px;
  background: #000;
  border-radius: 35px;
`;
const Username = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
`;
const Description = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;
const FollowArea = styled.div`
  margin-top: 10px;
  text-align: center;
`;
const FollowButton = styled.button`
  font-size: 14px;
`;

const UserDetail = ({ userDate }: any) => {
  const [followState, setFollowState] = useState(false);

  const handleFollow = () => {
    console.log('Follow');
    setFollowState(true);
  }

  const handleUnFollow = () => {
    console.log('UnFollow');
    setFollowState(false);
  };

  return (
    <>
      <Icon></Icon>
      <Username>{userDate && userDate.username}</Username>
      <FollowArea>
        {followState ? (
          <FollowButton onClick={handleUnFollow}>フォロー削除</FollowButton>
        ) : (
          <FollowButton onClick={handleFollow}>フォロー</FollowButton>
        )}
      </FollowArea>
      <Description>{userDate && userDate.description}</Description>
    </>
  );
};

export default UserDetail
