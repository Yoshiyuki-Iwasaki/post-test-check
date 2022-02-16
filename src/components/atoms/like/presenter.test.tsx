import { fireEvent, render, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Like from './presenter';

describe('<Like>', () => {
  it('いいねする前の状態は問題ないか', () => {
    const component = render(<Like />);
    const likedButton = component.getByTestId('like');
    expect(likedButton.innerHTML).toBe('0');
  });

  it('Snapshotは問題ないか', () => {
    const { asFragment } = render(<Like />);
    expect(asFragment()).toMatchSnapshot();
  });
});
