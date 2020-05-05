import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../models/category.model';
import {CategoriesService} from '../../../../state/categories/categories.service';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
  styleUrls: ['./create-category-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCategoryDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateCategoryDialogComponent>,
              private categoriesService: CategoriesService,
  ) {
  }

  ngOnInit(): void {
  }

  saveCategory(category: CategoryModel) {
    this.categoriesService.createCategory(category).subscribe(status => {
      if (status === 200) {
        this.dialogRef.close();
      }
    });
  }

}
