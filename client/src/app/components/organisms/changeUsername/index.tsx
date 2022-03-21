import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../../slice/user/';
import { selectsUsers } from '../../../slice/user/selector';
import { useForm } from 'react-hook-form';
import Input from '../../atoms/input';
import { Title } from './style';

const ChangeUsername: FC = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector(selectsUsers);
  const { register, handleSubmit, reset } = useForm();

  const handleEdit = (data: any) => {
    const sendData = {
      ...selectedUser,
      username: data.username,
    };
    dispatch(editUser(sendData));
    reset();
  };

  return (
    <>
      <Title>プロフィール編集</Title>
      <Input
        value={'username'}
        register={register}
        handleSubmit={handleSubmit}
        handleCreate={handleEdit}
      />
    </>
  );
};

export default ChangeUsername;
