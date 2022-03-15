import { RootState } from '../../store';
import { UserState } from './index';

export const selectsUsers = (state: RootState): UserState['users'] =>
  state.user.users;
