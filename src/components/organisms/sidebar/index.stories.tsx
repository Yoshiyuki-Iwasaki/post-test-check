import React from 'react';
import { object, select, text } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';

import Sidebar from './';

import knobData from './index.knobs.json';
const { username, description }: any = knobData;

export const standardSidebar = () => (
  <Sidebar
    username={text(username.label, username.default, username.group)}
    description={object(
      description.label,
      description.default,
      description.group
    )}
  />
);

export default {
  component: Sidebar,
  decorators: [withDesign],
  title: 'Organisms/Sidebar',
};
