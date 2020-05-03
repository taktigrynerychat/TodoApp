import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {TaskModel} from '../models/task.model';
import {url} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getAllTasks(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(`${url.API}/getUserTasks?id=${localStorage.getItem('userId')}`);
  }

  createUserTask(task: TaskModel): Observable<number> {
    return this.http.post<number>(`${url.API}/createUserTask`, task, {observe: 'response'})
      .pipe(map((response: HttpResponse<number>) => response.status));
  }

  updateUserTask(task: TaskModel): Observable<number> {
    return this.http.post<number>(`${url.API}/updateUserTask`, task, {observe: 'response'})
      .pipe(map((response: HttpResponse<number>) => response.status));
  }
}
