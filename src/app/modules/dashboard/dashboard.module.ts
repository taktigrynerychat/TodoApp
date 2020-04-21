import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {PageLayoutModule} from '../page-layout/page-layout.module';
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    MatCheckboxModule,
  ]
})
export class DashboardModule { }
