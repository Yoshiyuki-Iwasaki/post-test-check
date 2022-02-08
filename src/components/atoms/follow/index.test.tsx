import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Follow from '.';

describe('<Follow>', () => {
  test('フォローする前の状態は問題ないか', () => {
    const component = render(<Follow />);
    const followButton = component.getByTestId('follow');
    screen.getByText('フォロー');
  });

  test('フォローしたら状態は変わるか', () => {
    const component = render(<Follow />);
    const followButton = component.getByTestId('follow');
    fireEvent.click(followButton);
    screen.getByText('フォロー削除');
    const unfollowButton = component.getByTestId('unfollow');
    fireEvent.click(unfollowButton);
    screen.getByText('フォロー');
  });

  test('Snapshotは問題ないか', () => {
    const { asFragment } = render(<Follow />);
    expect(asFragment()).toMatchSnapshot();
  });
});
