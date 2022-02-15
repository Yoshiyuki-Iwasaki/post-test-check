import React from 'react';
import Follow from '../../atoms/follow';
import { Main, Icon, Username, Description } from './styles';

const Presenter = ({ userDate }: any) => {
  return (
    <Main>
      <Icon></Icon>
      <Username>{userDate && userDate.username}</Username>
      <Follow />
      <Description>{userDate && userDate.description}</Description>
    </Main>
  );
};

export default Presenter;
