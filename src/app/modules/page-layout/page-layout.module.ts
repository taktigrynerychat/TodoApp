import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageLayoutComponent} from './page-layout.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [PageLayoutComponent, HeaderComponent],
  imports: [
    CommonModule
  ], exports: [PageLayoutComponent]
})
export class PageLayoutModule {
}
