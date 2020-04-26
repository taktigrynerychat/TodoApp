import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {PageLayoutModule} from '../page-layout/page-layout.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {CreateTaskDialogComponent} from './components/create-task-dialog/create-task-dialog.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, CreateTaskDialogComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PageLayoutModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class DashboardModule { }
