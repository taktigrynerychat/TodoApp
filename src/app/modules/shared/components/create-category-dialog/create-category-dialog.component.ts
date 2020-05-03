import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
  styleUrls: ['./create-category-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCategoryDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
