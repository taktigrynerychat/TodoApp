import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {TaskModel} from '../../../../models/task.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.less']
})
export class TaskFormComponent implements OnInit, OnChanges {

  @Input()
  task: TaskModel;

  @Input()
  buttonText = 'Save';

  @Input()
  createMode = false;

  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  saveTask() {
    console.log(this.taskForm.value);
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
    } else if (this.createMode) {
      this.taskForm = this.formBuilder.group({
        user_id: localStorage.getItem('userId'),
        name: null,
        description: null,
        end_date: null,
        category_id: null
      });
    }
  }


}
