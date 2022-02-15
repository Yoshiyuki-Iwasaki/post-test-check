import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Follow from './presenter';

describe('<Follow>', () => {
  test('フォローする前の状態は問題ないか', () => {
    screen.getByText('フォロー');
  });

  test('フォローしたら状態は変わるか', () => {
    const component = render(<Follow />);
    const followButton = component.getByTestId('button');
    fireEvent.click(followButton);
    screen.getByText('フォロー削除');
    fireEvent.click(followButton);
    screen.getByText('フォロー');
  });

  test('Snapshotは問題ないか', () => {
    const { asFragment } = render(<Follow />);
    expect(asFragment()).toMatchSnapshot();
  });
});
