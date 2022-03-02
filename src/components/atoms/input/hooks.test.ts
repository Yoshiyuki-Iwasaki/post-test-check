// import { useState } from 'react';
// import { renderHook, act } from '@testing-library/react-hooks';
// import { useForm } from './hooks';

// test('挙動に問題ないか', () => {
//   const [postData, setPostData] = useState<any>([]);
//   const { result } = renderHook(() => useForm(postData, setPostData));
//   act(() => {
//     result.current.handleInput(e);
//   });
//   expect(result.current.followState).toBe(true);
//   // act(() => {
//   //   result.current.handleInput();
//   // });
//   // expect(result.current.followState).toBe(false);
// });
