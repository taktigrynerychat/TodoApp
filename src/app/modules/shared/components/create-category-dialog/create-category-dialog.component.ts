import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../models/category.model';

@Component({
  selector: 'app-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
  styleUrls: ['./create-category-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCategoryDialogComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  saveCategory(e: CategoryModel) {
    console.log(e);
  }

}
