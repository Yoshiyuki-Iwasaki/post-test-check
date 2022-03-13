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

const Presenter: React.FC<any> = ({ postData, handleRemove, handleLike }) => {
  return (
    <Main>
      <RemoveButton onClick={() => handleRemove()}>削除</RemoveButton>
      <Inner>
        <AvatarInfo>
          <Avatar></Avatar>
        </AvatarInfo>
        <PostContent>
          <UserInfo>
            <UserName>{postData.username}</UserName>
            <Date>{postData.date}</Date>
          </UserInfo>
          <Content>{postData.content}</Content>
        </PostContent>
      </Inner>
      <Like postData={postData} handleLike={handleLike} />
    </Main>
  );
};

export default Presenter;
