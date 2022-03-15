import React from 'react';
import Presenter from './presenter';
import { LayoutType } from './type';

const Layout: React.FC<LayoutType> = ({ children }) => {
  return <Presenter children={children} />;
};

export default Layout;
