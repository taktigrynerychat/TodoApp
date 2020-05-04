import {Injectable} from '@angular/core';
import {createInitialState} from './category.model';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {CategoryModel} from '../../models/category.model';

export interface CategoriesState extends EntityState<CategoryModel> {
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'categories'})
export class CategoriesStore extends EntityStore<CategoriesState> {

  constructor() {
    super(createInitialState());
  }

}

