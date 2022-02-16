import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Button from './';

export const basicButton = () => (
  <Button onClick={() => console.log('test')}>Button</Button>
);

export default {
  component: Button,
  decorators: [withKnobs],
  title: 'atoms/Button',
};
