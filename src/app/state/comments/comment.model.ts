import {CommentModel} from '../../models/comment.model';

export function createInitialState(): CommentModel {
  return {
    id: null,
    text: null,
    date: null
  };
}
