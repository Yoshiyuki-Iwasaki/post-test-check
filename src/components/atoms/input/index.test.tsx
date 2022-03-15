import reducer, { createTask } from '../../../slice/task';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    idCount: 1,
    tasks: [
      {
        id: 1,
        username: 'username1',
        date: 'date1',
        content:
          '投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容',
        likeState: false,
        likeCount: 0,
      },
    ],
  });
});

test('should handle a todo being added to an empty list', () => {
  const previousState: any = [];
  expect(reducer(previousState[0], createTask('Run the tests'))).toEqual({
    idCount: 2,
    tasks: [
      {
        id: 2,
        username: 'username1',
        date: 'date1',
        content: 'Run the tests',
        likeState: false,
        likeCount: 0,
      },
      {
        id: 1,
        username: 'username1',
        date: 'date1',
        content:
          '投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容',
        likeState: false,
        likeCount: 0,
      },
    ],
  });
});
