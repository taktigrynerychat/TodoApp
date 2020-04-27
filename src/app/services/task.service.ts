import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {TaskModel} from '../models/task.model';
import {url} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getAllTasks(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(`${url.API}/getUserTasks?id=${localStorage.getItem('userId')}`);
  }
}
