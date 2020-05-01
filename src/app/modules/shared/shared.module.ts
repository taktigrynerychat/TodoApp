import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DescPipe} from '../../helpers/desc.pipe';


@NgModule({
  declarations: [DescPipe],
  imports: [
    CommonModule
  ],
  exports: [
    DescPipe
  ]
})
export class SharedModule {
}
