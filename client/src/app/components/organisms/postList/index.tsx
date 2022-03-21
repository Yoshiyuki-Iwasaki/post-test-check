import React, { FC } from 'react';
import Presenter from './presenter';
import { useSelector } from 'react-redux';
import { createTask, likeTask } from '../../../slice/task';
import { selectsTasks } from '../../../slice/task/selector';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

const PostList: FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const postData = useSelector(selectsTasks);

  const handleCreate = (data: any) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };

  const handleLike = (data: any) => {
    dispatch(likeTask(data));
  };

  return (
    <Presenter
      register={register}
      handleSubmit={handleSubmit}
      handleCreate={handleCreate}
      handleLike={handleLike}
      postData={postData}
    />
  );
};

export default PostList;
