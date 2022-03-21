import React, { FC } from 'react';
import Presenter from './presenter';
import { LayoutType } from './type';

const Layout: FC<LayoutType> = ({ children }) => {
  return <Presenter children={children} />;
};

export default Layout;
