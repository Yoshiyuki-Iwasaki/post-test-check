import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUsernfo } from '../../../slice/user';
import { selectsUsers } from '../../../slice/user/selector';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Presenter from './presenter';

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
    <Presenter
      handleEditUserinfo={handleEditUserinfo}
      register={register}
      handleSubmit={handleSubmit}
      selectedUser={selectedUser}
    />
  );
};

export default ChangeUserinfo;
