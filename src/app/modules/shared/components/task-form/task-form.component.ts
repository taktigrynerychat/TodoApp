import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {TaskModel} from '../../../../models/task.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {CreateCategoryDialogComponent} from '../create-category-dialog/create-category-dialog.component';
import {CategoryService} from '../../../../services/category.service';
import {Observable} from 'rxjs/internal/Observable';
import {CategoryModel} from '../../../../models/category.model';
import {SharedService} from "../../../../services/shared.service";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskFormComponent implements OnInit, OnChanges {

  @Input()
  task: TaskModel;

  @Input()
  buttonText = 'Save';

  @Input()
  createMode = false;

  @Output()
  formSubmit: EventEmitter<TaskModel> = new EventEmitter<TaskModel>();

  taskForm: FormGroup;

  categories: Observable<CategoryModel[]>;

  constructor(private formBuilder: FormBuilder,
              public dialog: MatDialog,
              private categoryService: CategoryService,
              private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.sharedService.categoriesUpdated.subscribe(value => {
      if (value) {
        this.categories = this.categoryService.getUserCategories();
      }
    });
    this.categories = this.categoryService.getUserCategories();
  }

  saveTask() {
    this.formSubmit.emit(this.taskForm.value);
  }

  openCategoryPopup(e) {
    e.stopPropagation();
    e.preventDefault();
    const dialogRef = this.dialog.open(CreateCategoryDialogComponent);
    // dialogRef.afterClosed().subscribe(() => {
    //   this.categories = this.categoryService.getUserCategories();
    // });
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
