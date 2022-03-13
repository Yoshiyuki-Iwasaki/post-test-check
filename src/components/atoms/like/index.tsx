import React from 'react';
import Presenter from './presenter';
import { LikeType } from './type';

const Like: React.FC<LikeType> = ({ postData, handleLike }) => {
  return <Presenter postData={postData} handleLike={handleLike} />;
};

export default Like;
