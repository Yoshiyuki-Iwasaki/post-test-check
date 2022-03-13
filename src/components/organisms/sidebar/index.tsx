import React from 'react';
import Presenter from './presenter';
import { selectsUsers } from '../../../features/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const dispatch = useDispatch();
  const postData = useSelector(selectsUsers);

  return <Presenter postData={postData[0]} />;
};

export default Sidebar;
