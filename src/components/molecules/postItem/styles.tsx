import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.li`
  background: #fff;
  border-bottom: 1px solid gray;
  position: relative;

  &:last-child {
    border-bottom: none;
  }
`;
export const Inner = styled(Link)`
  padding: 15px 50px 50px 15px;
  display: flex;
`;
export const AvatarInfo = styled.div`
  margin-right: 11px;
`;
export const Avatar = styled.span`
  display: inline-block;
  background: blue;
  width: 43px;
  height: 43px;
  border-radius: 22px;
`;
export const PostContent = styled.div`
  width: calc(100% - 54px);
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;
export const UserName = styled(Link)`
  font-size: 15px;
  font-weight: 700;
`;
export const Date = styled.p`
  margin-left: 5px;
  font-size: 13px;
  color: gray;
`;
export const Content = styled.p`
  font-size: 14px;
  line-height: 1.4;
`;
export const RemoveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 5;
  font-size: 14px;
`;
