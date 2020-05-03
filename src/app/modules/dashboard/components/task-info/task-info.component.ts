import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {TaskModel} from '../../../../models/task.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TaskService} from '../../../../services/task.service';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskInfoComponent implements OnInit, OnChanges {

  @Input()
  task: TaskModel;

  @Output()
  taskUpdate: EventEmitter<any> = new EventEmitter<any>();

  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  saveTask(e: TaskModel) {
    this.taskService.updateUserTask(e).subscribe(status => {
      if (status === 200) {
        this.taskUpdate.emit();
      }
    });
    console.log(e);
  }

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
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
