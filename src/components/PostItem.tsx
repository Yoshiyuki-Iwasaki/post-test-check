import Like from './Like'
import styled from "styled-components";
import React from 'react';
import { Link } from "react-router-dom";

const Main = styled.li`
  background: #fff;
  border-bottom: 1px solid gray;
  position: relative;

  &:last-child {
    border-bottom: none;
  }
`;
const Inner = styled(Link)`
  padding: 15px 50px 50px 15px;
  display: flex;
`;
const AvatarInfo = styled.div`
  margin-right: 11px;
`;
const Avatar = styled.span`
  display: inline-block;
  background: blue;
  width: 43px;
  height: 43px;
  border-radius: 22px;
`;
const PostContent = styled.div`
  width: calc(100% - 54px);
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;
const UserName = styled(Link)`
  font-size: 15px;
  font-weight: 700;
`;
const Date = styled.p`
  margin-left: 5px;
  font-size: 13px;
  color: gray;
`;
const Content = styled.p`
  font-size: 14px;
  line-height: 1.4;
`;
const RemoveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 5;
  font-size: 14px;
`;

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

export default PostItem
