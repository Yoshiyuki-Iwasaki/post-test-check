import React from 'react';
import SettingListItem from '../../molecules/settingListItem';
import { List } from './style';

const Presenter = () => {
  return (
    <List>
      <SettingListItem href="/change_userInfo">
        プロフィール変更
      </SettingListItem>
      <SettingListItem href="/">ログアウト</SettingListItem>
    </List>
  );
};

export default Presenter;
