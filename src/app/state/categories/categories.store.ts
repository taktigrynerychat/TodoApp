import {Injectable} from '@angular/core';
import {CategoriesState, createInitialState} from './category.model';
import {EntityStore, StoreConfig} from '@datorama/akita';

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'categories', resettable: true})
export class CategoriesStore extends EntityStore<CategoriesState> {

  constructor() {
    super(createInitialState());
  }

}

