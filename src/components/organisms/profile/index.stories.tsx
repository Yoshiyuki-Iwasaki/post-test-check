import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import data from '../../../userData.json';

import Profile from './';

export const basicProfile = () => <Profile userDate={data} />;

export default {
  component: Profile,
  decorators: [withKnobs],
  title: 'organisms/Profile',
};
