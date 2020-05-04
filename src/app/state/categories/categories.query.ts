import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CategoriesStore, CategoriesState } from './categories.store';

@Injectable({ providedIn: 'root' })
export class CategoriesQuery extends QueryEntity<CategoriesState> {

  constructor(protected store: CategoriesStore) {
    super(store);
  }

}
