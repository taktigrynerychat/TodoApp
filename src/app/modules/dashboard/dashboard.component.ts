import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {TaskService} from '../../services/task.service';
import {TaskModel} from '../../models/task.model';
import {MatDialog} from '@angular/material/dialog';
import {CreateTaskDialogComponent} from '../shared/components/create-task-dialog/create-task-dialog.component';
import {CategoryService} from "../../services/category.service";
import {CategoryModel} from "../../models/category.model";
import {Subject} from "rxjs/internal/Subject";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  constructor(private taskService: TaskService,
              public dialog: MatDialog,
              private categoryService: CategoryService,
              // private cdr: ChangeDetectorRef
  ) {
  }

  tasks: Observable<TaskModel[]>;
  tasks2: TaskModel[];
  selectedTask: TaskModel;
  categories: CategoryModel[];
  unsub = new Subject();

  ngOnInit(): void {
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
    })).subscribe(value => {
      this.tasks2 = value;
      console.log(1);
    });
  }

  findCategory(id): CategoryModel {
    return this.categories.find(cat => {
      return cat.id === id;
    });
  }

  selectTask(task: TaskModel) {
    this.selectedTask ? (this.selectedTask.id !== task.id ? this.selectedTask = task : this.selectedTask = null) : this.selectedTask = task;
    console.log(this.selectedTask);
  }

  updateTask(task: TaskModel) {
    console.log(task);
  }

  openPopup() {
    this.dialog.open(CreateTaskDialogComponent);
  }

  trackFn(index, item) {
    return item.id;
  }
}

