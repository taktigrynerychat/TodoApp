import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TaskModel} from '../../../../models/task.model';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {TasksService} from '../../../../state/tasks/tasks.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/internal/Subject';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCardComponent implements OnDestroy {

  @Input()
  task: TaskModel;

  @Input()
  isSelected = false;

  @Input()
  selectedTask: TaskModel;

  @Output()
  taskSelection: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();

  private unsub = new Subject();

  constructor(private tasksService: TasksService) {
  }

  selectTask() {
    this.taskSelection.emit(this.task);
  }

  updateTask(e: MatCheckboxChange) {
    const updatedTask = {...this.task, is_done: e.checked};
    this.tasksService.updateUserTask(updatedTask).pipe(takeUntil(this.unsub)).subscribe();
  }

  ngOnDestroy(): void {
    this.unsub.unsubscribe();
  }

}
