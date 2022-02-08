import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Follow from './';

export const basicFollow = () => <Follow />;

export default {
  component: Follow,
  decorators: [withKnobs],
  title: 'atoms/Follow',
};
