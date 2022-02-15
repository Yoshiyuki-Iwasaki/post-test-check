import Like from '../../atoms/like';
import {
  Main,
  RemoveButton,
  Inner,
  AvatarInfo,
  Avatar,
  PostContent,
  UserInfo,
  UserName,
  Date,
  Content,
} from './styles';
import React from 'react';

const Presenter: React.FC<any> = ({ data, handleRemove }) => {
  return (
    <Main>
      <RemoveButton onClick={handleRemove}>削除</RemoveButton>
      <Inner>
        <AvatarInfo>
          <Avatar></Avatar>
        </AvatarInfo>
        <PostContent>
          <UserInfo>
            <UserName>{data.username}</UserName>
            <Date>{data.date}</Date>
          </UserInfo>
          <Content>{data.content}</Content>
        </PostContent>
      </Inner>
      <Like />
    </Main>
  );
};

export default Presenter;
