import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {TaskService} from '../../services/task.service';
import {TaskModel} from '../../models/task.model';
import {MatDialog} from '@angular/material/dialog';
import {CreateTaskDialogComponent} from '../shared/components/create-task-dialog/create-task-dialog.component';
import {CategoryService} from '../../services/category.service';
import {CategoryModel} from '../../models/category.model';
import {Subject} from 'rxjs/internal/Subject';
import {map} from 'rxjs/operators';
import {SharedService} from '../../services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private taskService: TaskService,
              public dialog: MatDialog,
              private categoryService: CategoryService,
              private sharedService: SharedService
  ) {
  }

  tasks: Observable<TaskModel[]>;
  tasks2: TaskModel[];
  selectedTask: TaskModel;
  categories: CategoryModel[];
  unsub = new Subject();

  ngOnInit(): void {
    this.getUserCategories();
    this.sharedService.categoriesUpdated.subscribe(value => {
      if (value) {
        this.getUserCategories();
      }
    });
  }

  getUserCategories() {
    this.categoryService.getUserCategories().subscribe({
      next: value => {
        this.categories = value;
      }, complete: () => {
        this.getAllTasks();
      }
    });
  }

  getAllTasks() {
    this.taskService.getAllTasks().pipe(map((tasks: TaskModel[]) => {
      return tasks.map((task: TaskModel) => {
        const cat = this.findCategory(task.category_id);
        return {...task, category: cat ? cat.name : null, color: cat ? cat.color : null};
      });
    })).subscribe({
      next: value => {
        this.tasks2 = value;
      }
    });
  }

  findCategory(id): CategoryModel {
    return this.categories.find(cat => {
      return cat.id === id;
    });
  }

  selectTask(task: TaskModel) {
    this.selectedTask ? (this.selectedTask.id !== task.id ? this.selectedTask = task : this.selectedTask = null) : this.selectedTask = task;
  }

  updateTask(task: TaskModel) {
    this.taskService.updateUserTask(task).subscribe(status => {
      if (status === 200) {
        this.getAllTasks();
        if (this.selectedTask && task.id === this.selectedTask.id) {
          this.selectedTask = task;
        }
      }
    });
    console.log(task);
  }

  openPopup() {
    const dialogRef = this.dialog.open(CreateTaskDialogComponent);
    dialogRef.afterClosed().subscribe((value) => {
      this.getAllTasks();
      console.log(value);
    });
  }

  trackFn(index, item) {
    return item.id;
  }
}

