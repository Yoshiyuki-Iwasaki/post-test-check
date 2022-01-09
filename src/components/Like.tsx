import React, { useState } from "react";
import styled from "styled-components";

const LikeButton = styled.span`
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  background-color: rgb(231, 76, 60);
  position: absolute;
  bottom: 3px;
  left: 70px;
  border-radius: 0.4rem;
  cursor: pointer;
  color: white;

  &:before {
    position: absolute;
    content: "♡";
    left: 5px;
    top: 50%;
    transform: translate(0,-50%);
  }
`;

const Like = () => {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <LikeButton data-testid="like" onClick={handleClick}>
      {count}
    </LikeButton>
  );
};

export default Like;
