import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {url} from '../../environments/environment';
import {Observable} from 'rxjs/internal/Observable';
import {CommentModel} from '../models/comment.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getTaskComments(id: number): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(`${url.API}/getTaskComments?id=${id}`);
  }

  createTaskComment(comment: CommentModel): Observable<number> {
    return this.http.post<number>(`${url.API}/createTaskComment`, comment, {observe: 'response'})
      .pipe(map((response: HttpResponse<number>) => response.status));
  }
}
