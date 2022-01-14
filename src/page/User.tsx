import React, { useState, useEffect } from "react";
import data from "../userData.json";
import styled from "styled-components";

const Username = styled.p``;
const Description = styled.p``;

const User = () => {
  const [userDate, setUserDate] = useState<any>();

  useEffect(() => {
    setUserDate(data);
  }, []);

  return (
    <div>
      <Username>{userDate && userDate.username}</Username>
      <Description>{userDate && userDate.description}</Description>
    </div>
  );
}

export default User
