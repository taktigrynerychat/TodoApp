import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../models/category.model';
import {MatDialogRef} from "@angular/material/dialog";
import {CategoryService} from "../../../../services/category.service";
import {SharedService} from "../../../../services/shared.service";

@Component({
  selector: 'app-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
  styleUrls: ['./create-category-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCategoryDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateCategoryDialogComponent>,
              private categoryService: CategoryService,
              private sharedService: SharedService) {
  }

  ngOnInit(): void {
  }

  saveCategory(e: CategoryModel) {
    this.categoryService.createCategory(e).subscribe(status => {
      if (status === 200) {
        this.dialogRef.close();
        this.sharedService.categoriesUpdated = true;
      }
    });
  }

}
