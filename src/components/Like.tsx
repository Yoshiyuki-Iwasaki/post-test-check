import React, { useState } from "react";

const Like = () => {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <span
      data-testid="counter"
      className="likeButton"
      onClick={handleClick}
    >
      {count}
    </span>
  );
};

export default Like;
