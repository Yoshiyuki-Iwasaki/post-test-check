import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  idCount: number;
  users: [
    {
      id: number;
      username: string;
      description: string;
    }
  ];
}

const initialState: UserState = {
  idCount: 1,
  users: [
    {
      id: 1,
      username: 'username1',
      description: 'descriptiondescriptiondescription',
    },
  ],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // ユーザー情報機能
    editUsernfo: (state, action) => {
      // state.tasksの中から編集したいtaskを抜き出す
      const user = state.users[0];
      if (user) {
        // 抜き出したtaskのtitleをかきかえる
        user.username = action.payload.username;
        user.description = action.payload.description;
      }
    },
  },
});

export const { editUsernfo } = userSlice.actions;

export default userSlice.reducer;
