import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TaskModel} from '../../../../models/task.model';
import {MatDialogRef} from '@angular/material/dialog';
import {TaskService} from '../../../../services/task.service';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTaskDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateTaskDialogComponent>,
              private taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  saveTask(e: TaskModel) {
    this.taskService.createUserTask(e).subscribe(status => {
      (status === 200) && this.dialogRef.close();
    });
  }
}
