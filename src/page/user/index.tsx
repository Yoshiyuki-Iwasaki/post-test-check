import React, { useState, useEffect } from 'react';
import data from '../../userData.json';
import UserDetail from '../../components/organisms/profile';
import { Main } from './style';

const User = () => {
  const [userDate, setUserDate] = useState<any>();

  useEffect(() => {
    setUserDate(data);
  }, []);

  return (
    <Main>
      <UserDetail userDate={userDate} />
    </Main>
  );
};

export default User;
