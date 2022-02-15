import React, { useEffect, useState } from 'react';
import data from '../../../postData.json';
import { postDataType } from '../../../type/data';
import Presenter from './presenter';

const PostList: React.FC = () => {
  const [postData, setPostData] = useState<postDataType[]>([]);

  useEffect(() => {
    setPostData(data);
  }, []);

  return <Presenter postData={postData} setPostData={setPostData} />;
};

export default PostList;
