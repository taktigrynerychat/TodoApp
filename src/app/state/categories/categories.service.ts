import {Injectable} from '@angular/core';
import {ID} from '@datorama/akita';
import {HttpClient} from '@angular/common/http';
import {CategoriesStore} from './categories.store';
import {tap} from 'rxjs/operators';
import {CategoryService} from '../../services/category.service';
import {Observable} from 'rxjs/internal/Observable';
import {CategoryModel} from '../../models/category.model';
import {CategoriesQuery} from './categories.query';
import {of} from 'rxjs/internal/observable/of';

@Injectable({providedIn: 'root'})
export class CategoriesService {

  constructor(private categoriesStore: CategoriesStore,
              private categoryService: CategoryService,
              private categoriesQuery: CategoriesQuery) {
  }

  getUserCategories(): Observable<CategoryModel[]> {
    if (this.categoriesQuery.getHasCache()) {
      return of();
    }
    return this.categoryService.getUserCategories().pipe(tap(categories => {
      this.categoriesStore.set(categories);
    }));
  }

  createCategory(category: CategoryModel): Observable<number> {
    return this.categoryService.createCategory(category).pipe(tap(status => {
      if (status === 200) {
        this.categoriesStore.add(category);
      }
    }));
  }

}
