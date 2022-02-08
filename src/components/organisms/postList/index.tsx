import React, { useEffect, useState } from 'react';
import PostItem from '../../molecules/postItem';
import PostInput from '../../atoms/input/PostInput';
import data from '../../../postData.json';
import { postDataType } from '../../../type/data';
import { Main } from './styles';

const PostList: React.FC = () => {
  const [postData, setPostData] = useState<postDataType[]>([]);

  useEffect(() => {
    setPostData(data);
  }, []);

  return (
    <>
      <PostInput postData={postData} setPostData={setPostData} />
      <Main>
        {postData &&
          postData.map((data: postDataType, index: number) => (
            <PostItem
              key={index}
              postData={postData}
              setPostData={setPostData}
              data={data}
            />
          ))}
      </Main>
    </>
  );
};

export default PostList;
