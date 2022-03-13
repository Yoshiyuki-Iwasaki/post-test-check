import React from 'react';
import Presenter from './presenter';
import { selectsUsers } from '../../../features/user/userSlice';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const postData = useSelector(selectsUsers);

  return <Presenter postData={postData[0]} />;
};

export default Sidebar;
