import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {PageLayoutModule} from '../page-layout/page-layout.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    PageLayoutModule
  ]
})
export class DashboardModule { }
