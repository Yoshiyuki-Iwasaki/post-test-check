import React from 'react';
import UserDetail from '../../components/organisms/profile';
import { Main } from './style';

const User: React.FC = () => {
  return (
    <Main>
      <UserDetail />
    </Main>
  );
};

export default User;
