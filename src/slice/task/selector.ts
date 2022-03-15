import { RootState } from '../../app/store';
import { TaskState } from './index';

export const selectsTasks = (state: RootState): TaskState['tasks'] =>
  state.task.tasks;
