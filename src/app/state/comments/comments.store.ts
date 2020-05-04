import {Injectable} from '@angular/core';
import {createInitialState} from './comment.model';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {CommentModel} from '../../models/comment.model';

export interface CommentsState extends EntityState<CommentModel> {
}

@Injectable()
@StoreConfig({name: 'comments', resettable: true})
export class CommentsStore extends EntityStore<CommentsState> {

  constructor() {
    super(createInitialState());
  }

}

