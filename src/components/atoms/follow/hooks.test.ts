import { renderHook, act } from '@testing-library/react-hooks';
import { useFollow } from './hooks';

test('should follow', () => {
  const { result } = renderHook(() => useFollow());

  act(() => {
    result.current.handleFollow();
  });

  expect(result.current.followState).toBe(true);
});
