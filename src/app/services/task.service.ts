import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {TaskModel} from "../models/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getAllTasks(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>('http://localhost:8080/getAllTasks');
  }
}
