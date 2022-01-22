import React, { useState, useEffect } from 'react';
import data from '../userData.json';
import styled from 'styled-components';
import UserDetail from '../components/UserDetail';

const Main = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 200px;
  background: #fff;
`;

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
