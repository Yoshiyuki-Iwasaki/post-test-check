import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import PostList from '.';

export const basicPostList = () => <PostList />;

export default {
  component: PostList,
  decorators: [withKnobs],
  title: 'organisms/PostList',
};
