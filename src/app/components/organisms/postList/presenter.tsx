import React from 'react';
import PostItem from '../../molecules/postItem';
import Input from '../../atoms/input';
import { postDataType } from '../../../../type/data';
import { Main } from './styles';

const Presenter: React.FC<any> = ({
  register,
  handleSubmit,
  handleCreate,
  handleLike,
  postData,
}) => {
  return (
    <>
      <Input
        register={register}
        handleSubmit={handleSubmit}
        handleCreate={handleCreate}
      />
      <Main>
        {postData &&
          postData.map((data: postDataType, index: number) => (
            <PostItem key={index} postData={data} handleLike={handleLike} />
          ))}
      </Main>
    </>
  );
};

export default Presenter;