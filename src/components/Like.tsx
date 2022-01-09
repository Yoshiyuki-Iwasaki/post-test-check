import React, { useState } from "react";
import styled from "styled-components";

const LikeButton = styled.span`
  background-color: rgb(231, 76, 60);
  color: white;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  border-radius: 0.4rem;
  cursor: pointer;
  position: absolute;
  bottom: 3px;
  left: 70px;
`;

const Like = () => {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <LikeButton
      data-testid="counter"
      className="likeButton"
      onClick={handleClick}
    >
      {count}
    </LikeButton>
  );
};

export default Like;
