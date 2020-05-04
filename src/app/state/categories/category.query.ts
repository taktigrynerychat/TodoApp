import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CategoryStore, CategoryState } from './category.store';

@Injectable({ providedIn: 'root' })
export class CategoryQuery extends QueryEntity<CategoryState> {

  constructor(protected store: CategoryStore) {
    super(store);
  }

}
