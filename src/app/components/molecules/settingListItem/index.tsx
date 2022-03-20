import { FC } from 'react';
import Label from '../../atoms/label';
import { SettingListItemType } from './type';
import { ListItem, ListLink } from './style';

const SettingListItem: FC<SettingListItemType> = ({ href, children }) => {
  return (
    <ListItem>
      <ListLink to={href}>
        <Label>{children}</Label>
      </ListLink>
    </ListItem>
  );
};

export default SettingListItem;
