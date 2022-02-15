import React from 'react';
import Presenter from './presenter';

const Sidebar = ({ username, description }: any) => {
  return <Presenter username={username} description={description} />;
};

export default Sidebar;
