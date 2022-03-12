import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface TaskState {
  // taskが何個あるのかを管理する
  idCount: number;
  // storeに保存するtaskの一覧
  tasks: { id: number; username: string; date: string; content: string }[];
}

const initialState: TaskState = {
  idCount: 1,
  tasks: [
    {
      id: 0,
      username: 'username1',
      date: 'date1',
      content:
        '投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容投稿内容',
    },
  ],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    // task追加機能
    createTask: (state, action) => {
      state.idCount++;
      const newTask = {
        id: state.idCount,
        username: 'username1',
        date: 'date1',
        content: action.payload,
      };
      state.tasks = [newTask, ...state.tasks];
    },
    //taskの削除機能
    removeTask: (state, action) => {
      // 指定したtask以外でstate.tasksを新たに配列を作成する
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const { createTask, removeTask } = taskSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectsTasks = (state: RootState): TaskState['tasks'] =>
  state.task.tasks;

export default taskSlice.reducer;
