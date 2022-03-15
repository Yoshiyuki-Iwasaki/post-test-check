import React from 'react';
import Header from '../../organisms/header';

import { Main, Inner, Content } from './style';
import { LayoutType } from './type';

const Presenter: React.FC<LayoutType> = ({ children }) => {
  return (
    <>
      <Main>
        <Inner>
          <Header />
          <Content>{children}</Content>
        </Inner>
      </Main>
    </>
  );
};

export default Presenter;
