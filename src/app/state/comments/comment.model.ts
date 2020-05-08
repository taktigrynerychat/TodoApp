import {CommentModel} from '../../models/comment.model';
import {EntityState} from '@datorama/akita';

export interface CommentsState extends EntityState<CommentModel> {
}

export function createInitialState(): CommentsState {
  return {};
}
