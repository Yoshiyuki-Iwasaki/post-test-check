import React from 'react';
import Presenter from './presenter';
import { selectsUsers } from '../../../features/user/userSlice';
import { useSelector } from 'react-redux';

const Profile: React.FC = () => {
  const userData = useSelector(selectsUsers);

  return <Presenter userData={userData[0]} />;
};

export default Profile;
