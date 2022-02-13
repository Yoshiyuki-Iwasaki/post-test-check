import React from 'react';
import Follow from '../../atoms/follow';
import { Main, Icon, Username, Description } from './styles';

const UserDetail = ({ userDate }: any) => {
  return (
    <Main>
      <Icon></Icon>
      <Username>{userDate && userDate.username}</Username>
      <Follow />
      <Description>{userDate && userDate.description}</Description>
    </Main>
  );
};

export default UserDetail;
