import React from 'react';
import Presenter from './presenter';
import { useFollow } from './hooks';

const Follow = () => {
  const { followState, handleFollow } = useFollow();
  return <Presenter state={followState} method={handleFollow} />;
};

export default Follow;
