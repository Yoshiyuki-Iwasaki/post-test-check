import React from 'react';
import Follow from '../../atoms/follow';
import { Icon, Username, Description } from './styles';

const Presenter: React.FC<any> = ({ userData }) => {
  return (
    <>
      <Icon></Icon>
      <Username>{userData && userData.username}</Username>
      <Follow />
      <Description>{userData && userData.description}</Description>
    </>
  );
};

export default Presenter;
