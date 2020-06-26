import {Injectable} from '@angular/core';
import {guid, ID} from '@datorama/akita';
import {CommentsStore} from './comments.store';
import {tap} from 'rxjs/operators';
import {CommentService} from '../../services/comment.service';
import {CommentModel} from '../../models/comment.model';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class CommentsService {

  constructor(private commentsStore: CommentsStore,
              private commentService: CommentService) {
  }

  getTaskComments(taskId: ID): Observable<CommentModel[]> {
    return this.commentService.getTaskComments(taskId).pipe(tap(comments => {
      this.commentsStore.set(comments);
    }));
  }

  createComment(comment: CommentModel): Observable<number> {
    return this.commentService.createTaskComment(comment).pipe(tap(status => {
      if (status === 200) {
        this.commentsStore.add({...comment, date: +new Date()});
      }
    }));
  }

}
