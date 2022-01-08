import React, { useState } from "react";

const LikeButton = () => {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <span className="likeButton" onClick={handleClick}>
      ♡{count}
    </span>
  );
}

export default LikeButton;
