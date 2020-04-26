import {Injectable} from '@angular/core';
import {createInitialState, DTaskState} from './dashboard.model';
import {EntityStore, StoreConfig} from '@datorama/akita';

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'dashboard'})
export class DTaskStore extends EntityStore<DTaskState> {

  constructor() {
    super(createInitialState());
  }

}

