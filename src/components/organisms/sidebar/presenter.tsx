import React from 'react';
import { Main, Icon, UserName, Description } from './styles';

const Presenter = ({ postData }: any) => {
  return (
    <Main>
      <Icon></Icon>
      {postData.username && <UserName>{postData.username}</UserName>}
      {postData.description && (
        <Description>{postData.description}</Description>
      )}
    </Main>
  );
};

export default Presenter;
