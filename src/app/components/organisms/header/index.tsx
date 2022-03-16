import React from 'react';
import { HeaderLayout, Title, TitleLink, LinkLayout } from './style';

const Header: React.FC = () => {
  return (
    <HeaderLayout>
      <Title>
        <TitleLink to="/">Post-Test-Check</TitleLink>
      </Title>
      <LinkLayout to="/setting">設定</LinkLayout>
    </HeaderLayout>
  );
};

export default Header;
