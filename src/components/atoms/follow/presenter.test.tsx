import { fireEvent, render, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Follow from './presenter';

describe('<Follow>', () => {
  it('レンダリングされているか', () => {
    const { getByTestId } = render(<Follow state={false} />);
    const input = getByTestId('button');
    expect(input).toBeTruthy();
  });

  it('フォローする前の状態は問題ないか', () => {
    const { getByTestId } = render(<Follow state={false} />);
    const input = getByTestId('button');
    expect(input.innerHTML).toBe('フォロー');
  });

  it('Snapshotは問題ないか', () => {
    const { asFragment } = render(<Follow state={false} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
