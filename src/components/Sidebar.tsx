import React from 'react'
import styled from "styled-components";

const Main = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  background: #fff;
}`;

const Sidebar = () => {
  return <Main>Sidebar</Main>;
}

export default Sidebar
