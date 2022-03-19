import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.li`
  background: #fff;
  border-bottom: 1px solid gray;
  position: relative;
  width: 400px;
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
export const Username = styled.p`
  margin-right: 5px;
`;
export const Content = styled.p`
  margin-top: 10px;
`;
export const RemoveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 5;
`;
