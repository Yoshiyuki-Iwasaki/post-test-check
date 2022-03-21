import { renderHook, act } from '@testing-library/react-hooks';
import { useFollow } from './hooks';

test('挙動に問題ないか', () => {
  const { result } = renderHook(() => useFollow());

  act(() => {
    result.current.handleFollow();
  });
  expect(result.current.followState).toBe(true);

  act(() => {
    result.current.handleFollow();
  });
  expect(result.current.followState).toBe(false);
});
