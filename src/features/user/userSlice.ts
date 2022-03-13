import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface TaskState {
  idCount: number;
  users: [
    {
      id: number;
      username: string;
      description: string;
    }
  ];
}

const initialState: TaskState = {
  idCount: 1,
  users: [
    {
      id: 1,
      username: 'username1',
      description: 'descriptiondescriptiondescription',
    },
  ],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    // いいね機能
    ediUser: (state, action) => {
      // state.tasksの中から編集したいtaskを抜き出す
      const task = state.users.find((t) => t.id === action.payload.id);
      if (task) {
        // 抜き出したtaskのcompletedを反転させる
        task.likeState = !task.likeState;
        task.likeCount ? task.likeCount-- : task.likeCount++;
      }
    },
  },
});

export const { ediUser } = taskSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectsTasks = (state: RootState): TaskState['tasks'] =>
  state.task.tasks;

export default taskSlice.reducer;
