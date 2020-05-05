import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskModel} from '../../../../models/task.model';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {TasksService} from '../../../../state/tasks/tasks.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCardComponent implements OnInit {

  @Input()
  task: TaskModel;

  @Input()
  isSelected = false;

  @Output()
  taskSelection: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();

  constructor(private tasksService: TasksService) {
  }

  ngOnInit(): void {
  }

  selectTask() {
    this.taskSelection.emit(this.task);
  }

  updateTask(e: MatCheckboxChange) {
    const updatedTask = {...this.task, is_done: e.checked};
    this.tasksService.updateUserTask(updatedTask).subscribe();
  }

}
