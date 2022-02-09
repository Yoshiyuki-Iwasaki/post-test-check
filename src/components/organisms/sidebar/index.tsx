import React from 'react';
import { Main, Icon, UserName, Description } from './styles';

const Sidebar = ({ username, description }: any) => {
  return (
    <Main>
      <Icon></Icon>
      {username && <UserName>{username}</UserName>}
      {description && <Description>{description}</Description>}
    </Main>
  );
};

export default Sidebar;
