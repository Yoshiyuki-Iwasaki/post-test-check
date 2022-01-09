import React from 'react'
import Like from './Like'
import styled from "styled-components";

const Main = styled.div`
  background: #fff;
  border-radius: 5px;
  position: fixed;
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Inner = styled.div`
  padding: 15px 15px 50px 15px;
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
const UserName = styled.p`
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

const PostItem = () => {

  return (
    <>
      <Main>
        <Inner>
          <AvatarInfo>
            <Avatar></Avatar>
          </AvatarInfo>
          <PostContent>
            <UserInfo>
              <UserName>iwasakiii</UserName>
              <Date>1月6日</Date>
            </UserInfo>
            <Content>
              投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容
            </Content>
          </PostContent>
        </Inner>
        <Like />
      </Main>
    </>
  );
}

export default PostItem
