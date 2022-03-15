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
    // いいね機能
    ediUser: (state, action) => {
      // state.tasksの中から編集したいtaskを抜き出す
      const user = state.users.find((t) => t.id === action.payload.id);
      if (user) {
        // 抜き出したtaskのtitleをかきかえる
        user.username = action.payload.username;
      }
    },
  },
});

export const { ediUser } = userSlice.actions;

export default userSlice.reducer;
