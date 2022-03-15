import React from 'react';
import UserDetail from '../../components/organisms/profile';
import { HeadBlock } from '../../components/organisms/head';
import { Main } from './style';

const User: React.FC = () => {
  return (
    <>
      <HeadBlock />
      <Main>
        <UserDetail />
      </Main>
    </>
  );
};

export default User;
