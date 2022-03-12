import reducer, { likeTask } from '../../../features/task/taskSlice';

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
  const previousState: any = [
    {
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
    },
  ];
  expect(
    reducer(previousState[0], likeTask(previousState[0].tasks[0]))
  ).toEqual({
    idCount: 1,
    tasks: [
      {
        id: 1,
        username: 'username1',
        date: 'date1',
        content:
          '投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容',
        likeState: true,
        likeCount: 1,
      },
    ],
  });
});
