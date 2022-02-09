import React, { useState, useEffect } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import data from '../../../postData.json';
import Input from './';

export const basicInput = () => {
  return <Input postData={[]} setPostData={[]} />;
};

export default {
  component: Input,
  decorators: [withKnobs],
  title: 'atoms/Input',
};
