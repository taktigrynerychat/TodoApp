import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TaskModel} from '../../../../models/task.model';
import {TasksService} from '../../../../state/tasks/tasks.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTaskDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateTaskDialogComponent>,
              private tasksService: TasksService) {
  }

  ngOnInit(): void {
  }

  createTask(task: TaskModel) {
    this.tasksService.createUserTask(task).subscribe(status => {
      if (status === 200) {
        this.dialogRef.close();
      }
    });
    console.log(task);
  }
}
