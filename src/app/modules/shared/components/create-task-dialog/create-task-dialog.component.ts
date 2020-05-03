import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TaskModel} from '../../../../models/task.model';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTaskDialogComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  saveTask(e: TaskModel) {
    console.log(e);
  }
}
