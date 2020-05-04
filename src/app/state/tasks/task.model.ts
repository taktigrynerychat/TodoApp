import {TaskModel} from '../../models/task.model';
import {ActiveState, EntityState} from '@datorama/akita';
import {CategoryModel} from '../../models/category.model';

export interface TaskModelForJoin extends TaskModel {
  category_id?: CategoryModel['id'];
}

export interface TasksState extends EntityState<TaskModelForJoin>, ActiveState {
}

export function createInitialState(): TasksState {
  return {
    active: null
  };
}
