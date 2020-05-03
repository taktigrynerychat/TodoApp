import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskModel} from "../../../../models/task.model";

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

  constructor() {
  }

  ngOnInit(): void {
  }

  selectTask() {
    this.taskSelection.emit(this.task);
  }

}
