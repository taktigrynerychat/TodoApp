import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private taskService: TaskService) {
  }

  tasks: Observable<any>;

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTasks();
  }

}
