import React, { FC } from 'react';
import Label from '../../atoms/label';
import { Main, Icon, UserName, Description } from './styles';

const Presenter:FC<any> = ({ postData }) => {
  return (
    <Main>
      <Icon></Icon>
      {postData.username && (
        <UserName>
          <Label fw={'700'}>{postData.username}</Label>
        </UserName>
      )}
      {postData.description && (
        <Description>
          <Label>{postData.description}</Label>
        </Description>
      )}
    </Main>
  );
};

export default Presenter;
