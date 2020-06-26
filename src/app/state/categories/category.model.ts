import {CategoryModel} from '../../models/category.model';
import {EntityState} from '@datorama/akita';

export interface CategoriesState extends EntityState<CategoryModel> {
}

export function createInitialState(): CategoriesState {
  return {};
}
