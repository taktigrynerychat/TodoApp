import {ActiveState, EntityState} from '@datorama/akita';
import {TaskModel} from '../../../models/task.model';

export interface DTaskState extends EntityState<TaskModel>, ActiveState {
}

export function createInitialState(): DTaskState {
  return { active: null };
}
