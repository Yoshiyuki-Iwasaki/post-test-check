import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import Sidebar from '.';

export const StandardSidebar = () => <Sidebar />;

export default {
  component: Sidebar,
  decorators: [withDesign],
  title: 'Organisms/Sidebar',
};
