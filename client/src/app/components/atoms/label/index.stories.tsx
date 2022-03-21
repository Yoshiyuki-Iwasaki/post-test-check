import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Text from '.';

export const basicText = () => <Text>Text</Text>;

export default {
  component: Text,
  decorators: [withKnobs],
  title: 'atoms/Text',
};
