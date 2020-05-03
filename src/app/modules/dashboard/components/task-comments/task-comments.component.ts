import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import {CommentModel} from '../../../../models/comment.model';
import {CommentService} from '../../../../services/comment.service';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-task-comments',
  templateUrl: './task-comments.component.html',
  styleUrls: ['./task-comments.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCommentsComponent implements OnInit, OnChanges {

  @Input()
  taskId: number;

  userLogin: string;
  comments: CommentModel[];

  commentForm: FormGroup;

  constructor(private commentService: CommentService,
              private fb: FormBuilder,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.userLogin = JSON.parse(localStorage.getItem('user')).login;
  }

  ngOnChanges(): void {
    if (this.taskId) {
      this.getTaskComments();
      this.createCommentForm();
    }
  }

  getTaskComments() {
    this.commentService.getTaskComments(this.taskId).subscribe({
      next: value => this.comments = value,
      complete: () => {
        this.cdr.markForCheck();
      }
    });
  }

  saveComment() {
    this.commentService.createTaskComment(this.commentForm.value).subscribe(status => {
      if (status === 200) {
        this.getTaskComments();
        this.createCommentForm();
      }
    });
  }

  createCommentForm() {
    this.commentForm = this.fb.group({
      task_id: this.taskId,
      text: null
    });
  }

  trackFn(index, item) {
    return item.id;
  }
}
