import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {url} from '../../environments/environment';
import {Observable} from 'rxjs/internal/Observable';
import {CommentModel} from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getTaskComments(id: number): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(`${url.API}/getTaskComments?id=${id}`);
  }
}
