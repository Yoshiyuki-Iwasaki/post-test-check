import { FC } from 'react';
import { HeadBlock } from '../../components/organisms/head';
import SettingList from '../../components/organisms/settingList';

const SettingPage: FC = () => {
  return (
    <>
      <HeadBlock />
      <SettingList />
    </>
  );
};

export default SettingPage;
