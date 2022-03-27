import { FC } from 'react';
import { HeadBlock } from '../../components/organisms/head';
import ChangeUserinfo from '../../components/organisms/changeUserinfo';

const ChangeUserinfoPage: FC = () => {
  return (
    <>
      <HeadBlock />
      <ChangeUserinfo />
    </>
  );
};

export default ChangeUserinfoPage;
