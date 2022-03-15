import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import taskReducer from '../slice/task';
import userReducer from '../slice/user';

export const store = configureStore({
  reducer: {
    task: taskReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
