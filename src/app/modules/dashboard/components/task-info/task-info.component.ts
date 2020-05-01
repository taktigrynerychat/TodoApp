import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import {TaskModel} from '../../../../models/task.model';
import {FormBuilder, FormGroup} from "@angular/forms";

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

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  log(e) {
    console.log(e);
  }

  saveTask() {
    console.log(this.taskForm.value);
  }

  ngOnChanges(): void {
    if (this.task) this.taskForm = this.formBuilder.group({
      id: this.task.id,
      is_done: this.task.is_done,
      end_date: this.task.end_date ? new Date(+this.task.end_date) : null,
    });
  }

}
