import React, { ReactNode } from 'react';
import { Main, Inner, Title, Content } from './style';

type LayoutType = {
  children: ReactNode;
};

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
