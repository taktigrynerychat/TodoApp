import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TaskModel} from '../../../../models/task.model';
import {CommentModel} from '../../../../models/comment.model';
import {Observable} from 'rxjs/internal/Observable';
import {CommentService} from '../../../../services/comment.service';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-task-comments',
  templateUrl: './task-comments.component.html',
  styleUrls: ['./task-comments.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCommentsComponent implements OnInit, OnChanges {

  @Input()
  task: TaskModel;

  userLogin: string;
  comments: Observable<CommentModel[]>;

  commentForm: FormGroup;

  constructor(private commentService: CommentService,
              private fb: FormBuilder) {
  }

  saveComment() {
    console.log(this.commentForm.value);
  }

  ngOnInit(): void {
    this.userLogin = JSON.parse(localStorage.getItem('user')).login;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (this.task) {
      this.comments = this.commentService.getTaskComments(this.task.id);
      this.commentForm = this.fb.group({
        task_id: this.task.id,
        text: null
      });
    }
  }

}
