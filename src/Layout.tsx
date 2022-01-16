import React from 'react'
import styled from "styled-components";

const Main = styled.div`
  background: #282c34;
  height: 100vh;
`;
const Inner = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  position: relative;
`;

const Title = styled.h1`
  padding: 20px 0;
  text-align: center;
  font-size: 22px;
  color: #fff;
`;

const Content = styled.div``;

const Layout = ({ children }:any) => {
  return (
    <div>
      <Main>
        <Inner>
          <Title>Post-Test-Check</Title>
          <Content>{children}</Content>
        </Inner>
      </Main>
    </div>
  );
};

export default Layout
