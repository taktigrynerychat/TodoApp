import {Injectable} from '@angular/core';
import {CommentsState, createInitialState} from './comment.model';
import {EntityStore, StoreConfig} from '@datorama/akita';



@Injectable()
@StoreConfig({name: 'comments', resettable: true})
export class CommentsStore extends EntityStore<CommentsState> {

  constructor() {
    super(createInitialState());
  }

}

