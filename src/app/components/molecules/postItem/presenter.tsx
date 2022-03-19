import Like from '../../atoms/like';
import Label from '../../atoms/label';
import {
  Main,
  RemoveButton,
  Inner,
  AvatarInfo,
  Avatar,
  PostContent,
  UserInfo,
  Username,
  Content,
} from './styles';
import { PostItemPresenterType } from './type';
import React from 'react';

const Presenter: React.FC<PostItemPresenterType> = ({
  postData,
  handleRemove,
  handleLike,
}) => {
  return (
    <Main>
      <RemoveButton onClick={() => handleRemove()}>
        <Label fw={'700'}>×</Label>
      </RemoveButton>
      <Inner to={'/post'}>
        <AvatarInfo>
          <Avatar></Avatar>
        </AvatarInfo>
        <PostContent>
          <UserInfo>
            <Username>
              <Label fs={'15px'} fw={'700'}>
                {postData.username}
              </Label>
            </Username>
            <Label fs={'13px'} cl={'gray'}>
              {postData.date}
            </Label>
          </UserInfo>
          <Content>
            <Label>{postData.content}</Label>
          </Content>
        </PostContent>
      </Inner>
      <Like postData={postData} handleLike={handleLike} />
    </Main>
  );
};

export default Presenter;
