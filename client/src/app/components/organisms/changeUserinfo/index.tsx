import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUsername, editDescription } from '../../../slice/user';
import { selectsUsers } from '../../../slice/user/selector';
import { useForm } from 'react-hook-form';
import Input from '../../atoms/input';
import { Title, InputArea } from './style';

const ChangeUserinfo: FC = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector(selectsUsers);
  const { register, handleSubmit, reset } = useForm();

  const handleEditUsername = (data: any) => {
    const sendData = {
      ...selectedUser,
      username: data.username,
    };
    dispatch(editUsername(sendData));
    reset();
  };

  const handleEditDescription = (data: any) => {
    const sendData = {
      ...selectedUser,
      description: data.description,
    };
    dispatch(editDescription(sendData));
    reset();
  };

  return (
    <>
      <InputArea>
        <Title>ユーザー名</Title>
        <Input
          value={'username'}
          register={register}
          handleSubmit={handleSubmit}
          handleCreate={handleEditUsername}
        />
      </InputArea>
      <InputArea>
        <Title>ディスクリプション</Title>
        <Input
          value={'description'}
          register={register}
          handleSubmit={handleSubmit}
          handleCreate={handleEditDescription}
        />
      </InputArea>
    </>
  );
};

export default ChangeUserinfo;
