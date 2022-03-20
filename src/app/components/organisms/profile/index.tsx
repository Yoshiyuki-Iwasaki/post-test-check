import React, { FC } from 'react';
import Presenter from './presenter';
import { selectsUsers } from '../../../slice/user/selector';
import { useSelector } from 'react-redux';

const Profile: FC = () => {
  const userData = useSelector(selectsUsers);

  return <Presenter userData={userData[0]} />;
};

export default Profile;
