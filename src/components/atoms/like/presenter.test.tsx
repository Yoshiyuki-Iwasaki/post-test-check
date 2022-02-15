import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Like from './presenter';

describe('<Like>', () => {
  test('いいねする前の状態は問題ないか', () => {
    const component = render(<Like />);
    screen.getByText('0');
  });

  test('いいねしたら状態は変わるか', () => {
    const component = render(<Like />);
    const likedButton = component.getByTestId('like');
    fireEvent.click(likedButton);
    screen.getByText('1');
    fireEvent.click(likedButton);
    screen.getByText('0');
  });

  test('Snapshotは問題ないか', () => {
    const { asFragment } = render(<Like />);
    expect(asFragment()).toMatchSnapshot();
  });
});
