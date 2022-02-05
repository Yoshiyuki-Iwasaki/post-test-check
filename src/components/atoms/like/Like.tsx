import React, { useState } from 'react';
import styled from 'styled-components';

const LikeButton = styled.button<{ liked: boolean }>`
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  position: absolute;
  background: ${({ liked }) => (liked ? 'red' : 'gray')};
  bottom: 8px;
  left: 70px;
  border-radius: 0.4rem;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: white;

  &:before {
    position: absolute;
    content: '♡';
    left: 5px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

const Like = () => {
  const [count, setCount] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  const handleLike = () => {
    setCount(count + 1);
    setLiked(!liked);
  };

  const handleUnlike = () => {
    setCount(count - 1);
    setLiked(!liked);
  };

  return liked ? (
    <LikeButton liked={liked} data-testid="unlike" onClick={handleUnlike}>
      {count}
    </LikeButton>
  ) : (
    <LikeButton liked={liked} data-testid="like" onClick={handleLike}>
      {count}
    </LikeButton>
  );
};

export default Like;
