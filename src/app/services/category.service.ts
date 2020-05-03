import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {CategoryModel} from '../models/category.model';
import {url} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getUserCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(`${url.API}/getUserCategories?id=${localStorage.getItem('userId')}`);
  }

  createCategory(category: CategoryModel): Observable<HttpResponse> {
    return this.http.post<HttpResponse>(`${url.API}/createCategory`, category, {observe: 'response'})
      .pipe(map((response: HttpResponse) => response.status));
  }
}
