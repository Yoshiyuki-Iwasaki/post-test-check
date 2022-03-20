import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import PostItem from '.';

const postData = {
  idCount: 1,
  tasks: [
    {
      id: 1,
      username: 'username1',
      date: 'date1',
      content:
        '投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容',
      likeState: false,
      likeCount: 0,
    },
  ],
};

export const BasicPostItem = () => (
  <PostItem postData={postData} handleLike={console.log('click')} />
);

export default {
  component: PostItem,
  decorators: [withKnobs],
  title: 'molecules/PostItem',
};
