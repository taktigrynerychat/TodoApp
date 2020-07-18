import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {TaskModel} from '../../../../models/task.model';
import {TasksService} from '../../../../state/tasks/tasks.service';
import {MatDialogRef} from '@angular/material/dialog';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/internal/Subject';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTaskDialogComponent implements OnDestroy {
  private unsub = new Subject();

  constructor(public dialogRef: MatDialogRef<CreateTaskDialogComponent>,
              private tasksService: TasksService) {
  }

  createTask(task: TaskModel) {
    this.tasksService.createUserTask(task).pipe(takeUntil(this.unsub)).subscribe(status => {
      if (status === 200) {
        this.dialogRef.close();
      }
    });
    console.log(task);
  }

  ngOnDestroy(): void {
    this.unsub.unsubscribe();
  }
}
