import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListItem = styled.li`
  background: #fff;
  border-bottom: 1px solid #333;

  &:last-child {
    border-bottom: 0;
  }
`;
export const ListLink = styled(Link)`
  padding: 10px;
  display: block;
  transition: all 0.6s;

  &:hover {
    opacity: 0.6;
  }
`;
