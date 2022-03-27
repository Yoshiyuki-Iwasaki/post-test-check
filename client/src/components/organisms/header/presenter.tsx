import React from 'react';
import Label from '../../atoms/label';
import { HeaderLayout, Title, LinkLayout } from './style';

const Presenter = () => {
  return (
    <HeaderLayout>
      <Title>
        <Label href="/" fs={'22px'} cl={'#fff'}>
          Talkee
        </Label>
      </Title>
      <LinkLayout>
        <Label href="/setting" cl={'#fff'}>
          設定
        </Label>
      </LinkLayout>
    </HeaderLayout>
  );
};

export default Presenter;
