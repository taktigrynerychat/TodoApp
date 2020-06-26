import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import {TaskModel} from '../../../../models/task.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TasksService} from "../../../../state/tasks/tasks.service";

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskInfoComponent implements OnInit, OnChanges {

  @Input()
  task: TaskModel;

  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private tasksService: TasksService) {
  }

  ngOnInit(): void {
  }

  saveTask(task: TaskModel) {
    this.tasksService.updateUserTask(task).subscribe();
    // console.log(task);
  }

  ngOnChanges(): void {
    if (this.task) {
      this.taskForm = this.formBuilder.group({
        id: this.task.id,
        is_done: this.task.is_done,
        name: this.task.name,
        description: this.task.description,
        end_date: this.task.end_date ? new Date(+this.task.end_date) : null,
        category_id: this.task.category_id
      });
    }
  }

}
