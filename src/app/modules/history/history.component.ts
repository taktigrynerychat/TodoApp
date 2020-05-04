import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Observable} from "rxjs/internal/Observable";
import {TaskModel} from "../../models/task.model";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements OnInit {

  tasks: Observable<TaskModel[]>;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTasks().pipe(map((tasks: TaskModel[]) => {
      return tasks.filter((task: TaskModel) => !!task.is_done);
    }));
  }

}
