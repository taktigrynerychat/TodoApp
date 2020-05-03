import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import {TaskModel} from '../../../../models/task.model';
import {CommentModel} from '../../../../models/comment.model';
import {Observable} from 'rxjs/internal/Observable';
import {CommentService} from '../../../../services/comment.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {of} from "rxjs/internal/observable/of";

@Component({
  selector: 'app-task-comments',
  templateUrl: './task-comments.component.html',
  styleUrls: ['./task-comments.component.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCommentsComponent implements OnInit, OnChanges {

  @Input()
  taskId: number;

  userLogin: string;
  comments: Observable<CommentModel[]>;

  commentForm: FormGroup;

  constructor(private commentService: CommentService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.userLogin = JSON.parse(localStorage.getItem('user')).login;
  }

  ngOnChanges(): void {
    if (this.taskId) {
      this.comments = this.commentService.getTaskComments(this.taskId);
      this.createCommentForm();
    }
  }

  saveComment() {
    console.log(this.commentForm.value);
    this.createCommentForm();
    this.comments = of<CommentModel[]>([{ ...this.commentForm.value, id: 2}]);
  }

  createCommentForm() {
    this.commentForm = this.fb.group({
      task_id: this.taskId,
      text: null
    });
  }
}
