import {CategoryModel} from '../../models/category.model';

export function createInitialState(): CategoryModel {
  return {
    id: null,
    name: null,
    color: null
  };
}
