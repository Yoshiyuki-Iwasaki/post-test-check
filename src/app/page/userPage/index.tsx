import React from 'react';
import UserDetail from '../../components/organisms/profile';
import { HeadBlock } from '../../components/organisms/head';
import { Main } from './style';

const User: React.FC = () => {
  return (
    <>
      <HeadBlock
        title="ユーザーページのタイトルです"
        description="ユーザーページの説明文です"
        path="user"
      />
      <Main>
        <UserDetail />
      </Main>
    </>
  );
};

export default User;
