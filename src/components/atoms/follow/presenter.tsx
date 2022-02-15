import React from 'react';
import { FollowButton } from './styles';

const Presenter = ({ state, method }: any) => {
  return (
    <FollowButton data-testid="button" onClick={method}>
      {state ? 'フォロー削除' : 'フォロー'}
    </FollowButton>
  );
};

export default Presenter;
