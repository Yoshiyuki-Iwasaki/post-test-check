import React from 'react';
import FollowPresenter from './presenter';
import { useFollow } from './hooks';

const Follow = () => {
  const { followState, handleFollow } = useFollow();
  return <FollowPresenter state={followState} method={handleFollow} />;
};

export default Follow;
