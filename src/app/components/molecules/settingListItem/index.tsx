import React from 'react';
import Label from '../../atoms/label';
import { ListItem, ListLink } from './style';

const SettingListItem = ({ href, children }: any) => {
  return (
    <ListItem>
      <ListLink to={href}>
        <Label>{children}</Label>
      </ListLink>
    </ListItem>
  );
};

export default SettingListItem;
