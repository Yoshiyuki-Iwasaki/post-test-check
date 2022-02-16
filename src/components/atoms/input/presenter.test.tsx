import { fireEvent, render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Input from './presenter';
import data from '../../../postData.json';

describe('Input Component', () => {
  const props = {};

  it('レンダリングされているか', () => {
    const { getByTestId } = render(<Input />);
    const input = getByTestId('input');
    expect(input).toBeTruthy();
  });

  it('Snapshotは問題ないか', () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });
});
