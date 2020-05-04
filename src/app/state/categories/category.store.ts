import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface CategoryState extends EntityState<Category> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'category' })
export class CategoryStore extends EntityStore<CategoryState> {

  constructor() {
    super();
  }

}

