import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HistoryComponent} from './history.component';
import {PageLayoutModule} from '../page-layout/page-layout.module';


@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    PageLayoutModule
  ]
})
export class HistoryModule {
}
