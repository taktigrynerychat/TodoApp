import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DescPipe} from '../../helpers/desc.pipe';
import { TaskFormComponent } from './components/task-form/task-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [DescPipe, TaskFormComponent],
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
  ],
  exports: [
    DescPipe,
    TaskFormComponent
  ]
})
export class SharedModule {
}
