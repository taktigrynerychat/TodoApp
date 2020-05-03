import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskModel} from '../../../../models/task.model';
import {MatCheckboxChange} from '@angular/material/checkbox';

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

  @Output()
  taskUpdate: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectTask() {
    this.taskSelection.emit(this.task);
  }

  updateTask(e: MatCheckboxChange) {
    const updatedTask = {...this.task, is_done: e.checked};
    this.taskUpdate.emit(updatedTask);
  }

}
