import React from 'react';
import PostItem from '../../molecules/postItem';
import PostInput from '../../atoms/input';
import { postDataType } from '../../../type/data';
import { Main } from './styles';
import { PostListType } from './type';

const Presenter: React.FC<PostListType> = ({ postData, setPostData }) => {
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

export default Presenter;
