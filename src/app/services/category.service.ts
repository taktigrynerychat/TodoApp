import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {CategoryModel} from '../models/category.model';
import {url} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getUserCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(`${url.API}/getUserCategories?id=${localStorage.getItem('userId')}`);
  }
}
