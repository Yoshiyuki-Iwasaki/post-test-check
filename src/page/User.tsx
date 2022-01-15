import React, { useState, useEffect } from "react";
import data from "../userData.json";
import styled from "styled-components";
import UserDetail from "../components/UserDetail";

const Main = styled.div`
  margin: 0 auto;
  padding: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 200px;
  transform: translate(-50%, -50%);
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
}

export default User
