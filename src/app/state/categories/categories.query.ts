import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CategoriesStore} from './categories.store';
import {CategoriesState} from './category.model';

@Injectable({ providedIn: 'root' })
export class CategoriesQuery extends QueryEntity<CategoriesState> {

  constructor(protected store: CategoriesStore) {
    super(store);
  }

}
