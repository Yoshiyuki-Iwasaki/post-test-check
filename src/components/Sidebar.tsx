import React from 'react'
import styled from "styled-components";

const Main = styled.div`
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 20px;
  width: 250px;
  transform: translate(0, -50%);
  background: #fff;
  box-sizing: border-box;
}`;
const Icon = styled.p`
  margin: 0 auto;
  width: 70px;
  height: 70px;
  background: #000;
  border-radius: 35px;
`;
const UserName = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`;
const Description = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;

const Sidebar = () => {
  return (
    <Main>
      <Icon></Icon>
      <UserName>UserName</UserName>
      <Description>
        説明がはいります。説明がはいります。説明がはいります。
        説明がはいります。 説明がはいります。 説明がはいります。
        説明がはいります。 説明がはいります。 説明がはいります。
        説明がはいります。 説明がはいります。 説明がはいります。
        説明がはいります。 説明がはいります。
      </Description>
    </Main>
  );
}

export default Sidebar
