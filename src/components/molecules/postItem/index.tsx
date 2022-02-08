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

const PostItem: React.FC<any> = ({ data, postData, setPostData }) => {
  const handleRemove = () => {
    const result = window.confirm('本当にこの投稿を削除しますか。');
    if (result) {
      const fixedData = [...postData];
      fixedData.splice(data.id, 1);
      setPostData(fixedData);
    }
  };
  return (
    <>
      <Main>
        <RemoveButton onClick={handleRemove}>削除</RemoveButton>
        <Inner to="/post">
          <AvatarInfo>
            <Avatar></Avatar>
          </AvatarInfo>
          <PostContent>
            <UserInfo>
              <UserName to="/user">{data.username}</UserName>
              <Date>{data.date}</Date>
            </UserInfo>
            <Content>{data.content}</Content>
          </PostContent>
        </Inner>
        <Like />
      </Main>
    </>
  );
};

export default PostItem;
