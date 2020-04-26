import {Component, OnInit} from '@angular/core';
import {DashboardService} from './modules/dashboard/state/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'todo-app';

  constructor(private dataService: DashboardService) {
  }

  ngOnInit(): void {
    this.dataService.fetchTasks().subscribe();
  }
}
