import React from 'react';
import { Main, Inner, Title, Content } from './style';
import { LayoutType } from './type';

const Presenter: React.FC<LayoutType> = ({ children }) => {
  return (
    <div>
      <Main>
        <Inner>
          <Title>Post-Test-Check</Title>
          <Content>{children}</Content>
        </Inner>
      </Main>
    </div>
  );
};

export default Presenter;
