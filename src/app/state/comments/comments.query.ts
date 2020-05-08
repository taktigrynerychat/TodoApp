import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CommentsStore} from './comments.store';
import {CommentsState} from './comment.model';

@Injectable()
export class CommentsQuery extends QueryEntity<CommentsState> {

  constructor(protected store: CommentsStore) {
    super(store);
  }

}
