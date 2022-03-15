import React from 'react';
import { HeaderLayout, Title, Link } from './style';

const Header: React.FC = () => {
  return (
    <HeaderLayout>
      <Title>Post-Test-Check</Title>
      <Link href="#">設定</Link>
    </HeaderLayout>
  );
};

export default Header;
