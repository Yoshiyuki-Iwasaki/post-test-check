import { FC } from 'react';
import PostItem from '../../molecules/postItem';
import Input from '../../atoms/input';
import { postDataType } from './type';
import { Main } from './styles';

const Presenter: FC<any> = ({
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
            <PostItem
              key={index}
              postData={data}
              handleLike={handleLike}
              removeFlag={true}
            />
          ))}
      </Main>
    </>
  );
};

export default Presenter;
