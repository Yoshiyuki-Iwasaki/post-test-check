import React from 'react'
import styled from "styled-components";

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

const UserDetail = ({ userDate }: any) => {
  return (
    <>
      <Icon></Icon>
      <Username>{userDate && userDate.username}</Username>
      <Description>{userDate && userDate.description}</Description>
    </>
  );
};

export default UserDetail
