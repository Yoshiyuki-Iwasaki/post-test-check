import { withKnobs } from '@storybook/addon-knobs';

import Like from '.';

const postData = {
  id: 1,
  username: 'username1',
  date: 'date1',
  content:
    '投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容',
  likeState: false,
  likeCount: 0,
};

export const BasicLike = () => (
  <Like postData={postData} handleLike={console.log('click')} />
);

export default {
  component: Like,
  decorators: [withKnobs],
  title: 'atoms/Like',
};
