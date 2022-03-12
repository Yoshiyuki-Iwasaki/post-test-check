import React from 'react';
import PostItem from '../../molecules/postItem';
import PostInput from '../../atoms/input';
import { postDataType } from '../../../type/data';
import { Main } from './styles';
// import { PostListType } from './type';

const Presenter: React.FC<any> = ({ postData }) => {
  return (
    <>
      <PostInput />
      <Main>
        {postData &&
          postData.map((data: postDataType, index: number) => (
            <PostItem key={index} postData={data} />
          ))}
      </Main>
    </>
  );
};

export default Presenter;
