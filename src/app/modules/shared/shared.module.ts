import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DescPipe} from '../../helpers/desc.pipe';
import {TaskFormComponent} from './components/task-form/task-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CategoryFormComponent} from './components/category-form/category-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import {CreateCategoryDialogComponent} from './components/create-category-dialog/create-category-dialog.component';
import {CreateTaskDialogComponent} from './components/create-task-dialog/create-task-dialog.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    DescPipe,
    TaskFormComponent,
    CategoryFormComponent,
    CreateCategoryDialogComponent,
    CreateTaskDialogComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule
  ],
  exports: [
    DescPipe,
    TaskFormComponent,
    CategoryFormComponent,
    CreateCategoryDialogComponent,
    CreateTaskDialogComponent
  ]
})
export class SharedModule {
}
