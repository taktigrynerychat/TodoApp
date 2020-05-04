import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {TaskService} from '../../services/task.service';
import {TaskModel} from '../../models/task.model';
import {MatDialog} from '@angular/material/dialog';
import {CreateTaskDialogComponent} from '../shared/components/create-task-dialog/create-task-dialog.component';
import {CategoryModel} from '../../models/category.model';
import {Subject} from 'rxjs/internal/Subject';
import {CategoriesService} from '../../state/categories/categories.service';
import {CategoriesQuery} from '../../state/categories/categories.query';
import {TasksService} from '../../state/tasks/tasks.service';
import {TasksQuery} from '../../state/tasks/tasks.query';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  constructor(private taskService: TaskService,
              public dialog: MatDialog,
              private categoriesService: CategoriesService,
              private categoriesQuery: CategoriesQuery,
              private tasksService: TasksService,
              private tasksQuery: TasksQuery) {
  }

  tasks: Observable<TaskModel[]>;
  selectedTask: TaskModel;
  categories: Observable<CategoryModel[]>;
  unsub = new Subject();

  ngOnInit(): void {
    this.tasks = this.tasksQuery.joinedTasks$;
    this.categories = this.categoriesQuery.selectAll();
    this.categoriesService.getUserCategories().subscribe();
    this.tasksService.getAllTasks().subscribe();
    // TODO: Есть ли необходимость вызывать getAllTasks() только на комплит стадии getUserCategories()?
  }

  selectTask(task: TaskModel) {
    this.selectedTask ? (this.selectedTask.id !== task.id ? this.selectedTask = task : this.selectedTask = null) : this.selectedTask = task;
    console.log(this.selectedTask);
  }

  openPopup() {
    this.dialog.open(CreateTaskDialogComponent);
  }

  trackFn(index, item) {
    return item.id;
  }
}

