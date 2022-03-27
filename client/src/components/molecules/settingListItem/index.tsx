import { FC } from 'react';
import Presenter from './presenter';
import { SettingListItemType } from './type';

const SettingListItem: FC<SettingListItemType> = ({ href, children }) => {
  return <Presenter href={href} children={children} />;
};

export default SettingListItem;
