import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import {HistoryComponent} from './history.component';
import {PageLayoutModule} from '../page-layout/page-layout.module';


@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    MatTooltipModule,
    MatCheckboxModule,
  ],
})
export class HistoryModule {
}
