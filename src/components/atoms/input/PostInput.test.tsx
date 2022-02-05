import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import PostInput from './PostInput';
import data from '../../../postData.json';

describe('<PostInput>', () => {
  const props = {
    postData: data,
    setPostData: jest.fn(),
  };

  test('仮の入力値を設定可能かどうか', () => {
    render(<PostInput {...props} />);
    const inputValue: any = screen.getByPlaceholderText('Enter');
    userEvent.type(inputValue, 'test');
    expect(inputValue.value).toBe('test');
  });

  test('Snapshotは問題ないか', () => {
    const { asFragment } = render(<PostInput {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
