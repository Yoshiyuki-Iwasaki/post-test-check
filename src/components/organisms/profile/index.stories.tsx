import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Profile from './';

export const basicProfile = () => {
  return <Profile />;
};

export default {
  component: Profile,
  decorators: [withKnobs],
  title: 'organisms/Profile',
};
