import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../models/category.model';
import {CategoriesService} from '../../../../state/categories/categories.service';
import {MatDialogRef} from '@angular/material/dialog';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/internal/Subject';

@Component({
  selector: 'app-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
  styleUrls: ['./create-category-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateCategoryDialogComponent implements OnDestroy {
  private unsub = new Subject();

  constructor(public dialogRef: MatDialogRef<CreateCategoryDialogComponent>,
              private categoriesService: CategoriesService,
  ) {
  }

  saveCategory(category: CategoryModel) {
    this.categoriesService.createCategory(category)
      .pipe(takeUntil(this.unsub))
      .subscribe(status => {
        if (status === 200) {
          this.dialogRef.close();
        }
      });
  }

  ngOnDestroy(): void {
    this.unsub.unsubscribe();
  }

}
