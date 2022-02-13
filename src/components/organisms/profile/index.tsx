import React from 'react';
import Follow from '../../atoms/follow';
import { Icon, Username, Description } from './styles';

const UserDetail = ({ userDate }: any) => {
  return (
    <>
      <Icon></Icon>
      <Username>{userDate && userDate.username}</Username>
      <Follow />
      <Description>{userDate && userDate.description}</Description>
    </>
  );
};

export default UserDetail;
