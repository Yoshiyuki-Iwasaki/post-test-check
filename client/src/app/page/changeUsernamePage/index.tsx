import { FC } from 'react';
import { HeadBlock } from '../../components/organisms/head';
import ChangeUsername from '../../components/organisms/changeUsername';

const ChangeUsernamePage: FC = () => {
  return (
    <>
      <HeadBlock />
      <ChangeUsername />
    </>
  );
};

export default ChangeUsernamePage;
