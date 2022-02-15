import React, { ReactNode } from 'react';
import Presenter from './presenter';

type LayoutType = {
  children: ReactNode;
};

const Layout: React.FC<LayoutType> = ({ children }) => {
  return <Presenter children={children} />;
};

export default Layout;
