import React, { useState, useEffect } from 'react';
import UserDetail from '../../components/organisms/profile';
import { Main } from './style';

const User = () => {
  return (
    <Main>
      <UserDetail />
    </Main>
  );
};

export default User;
