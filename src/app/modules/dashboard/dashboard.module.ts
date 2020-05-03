import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {PageLayoutModule} from '../page-layout/page-layout.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TaskInfoComponent} from './components/task-info/task-info.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../shared/shared.module';
import { TaskCommentsComponent } from './components/task-comments/task-comments.component';
import {MatIconModule} from '@angular/material/icon';
import { TaskCardComponent } from './components/task-card/task-card.component';


@NgModule({
  declarations: [DashboardComponent, TaskInfoComponent, TaskCommentsComponent, TaskCardComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PageLayoutModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    SharedModule,
    MatIconModule
  ],
  providers: [MatDatepickerModule],
})
export class DashboardModule {
}
