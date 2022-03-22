import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUsernfo } from '../../../slice/user';
import { selectsUsers } from '../../../slice/user/selector';
import { useForm } from 'react-hook-form';
import { Form, Title, FormInput, SubmitButton } from './style';
import { useNavigate } from 'react-router-dom';

const ChangeUserinfo: FC = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector(selectsUsers);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const handleEditUserinfo = (data: any) => {
    const sendData = {
      ...selectedUser,
      username: data.username,
      description: data.description,
    };
    dispatch(editUsernfo(sendData));
    reset();
    navigate('/');
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handleEditUserinfo)}>
        <Title>ユーザー名</Title>
        <FormInput
          type="text"
          data-testid="input"
          defaultValue={selectedUser[0].username}
          {...register('username', { required: true })}
        />
        <Title>ディスクリプション</Title>
        <FormInput
          type="text"
          data-testid="input"
          defaultValue={selectedUser[0].description}
          {...register('description', { required: true })}
        />
        <SubmitButton
          type="submit"
          value="編集"
          onClick={handleSubmit(handleEditUserinfo)}
        />
      </Form>
    </>
  );
};

export default ChangeUserinfo;
