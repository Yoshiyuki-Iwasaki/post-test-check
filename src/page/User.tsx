import React, { useState, useEffect } from "react";
import data from "../userData.json";
import styled from "styled-components";

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
const Icon = styled.p`
  margin: 0 auto;
  width: 70px;
  height: 70px;
  background: #000;
  border-radius: 35px;
`;
const Username = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
`;
const Description = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;

const User = () => {
  const [userDate, setUserDate] = useState<any>();

  useEffect(() => {
    setUserDate(data);
  }, []);

  return (
    <Main>
      <Icon></Icon>
      <Username>{userDate && userDate.username}</Username>
      <Description>{userDate && userDate.description}</Description>
    </Main>
  );
}

export default User
