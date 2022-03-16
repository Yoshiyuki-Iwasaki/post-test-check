import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderLayout = styled.header`
  position: relative;
`;

export const Title = styled.h1`
  padding: 20px 0;
  text-align: center;
`;

export const TitleLink = styled(Link)`
  font-size: 22px;
  color: #fff;
`;

export const LinkLayout = styled(Link)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  font-size: 14px;
  color: #fff;
`;
