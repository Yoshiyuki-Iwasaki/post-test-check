import React, { useState, useEffect } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Input from './';

export const basicInput = () => {
  return <Input />;
};

export default {
  component: Input,
  decorators: [withKnobs],
  title: 'atoms/Input',
};
