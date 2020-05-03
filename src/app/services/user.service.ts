import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {url} from '../../environments/environment';
import {UserCredentialsModel, UserInfoModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  singIn(credentials: UserCredentialsModel): Observable<UserInfoModel> {
    return this.http.post<UserInfoModel>(`${url.API}/login`, credentials);
  }

  singUp(credentials: UserCredentialsModel): Observable<UserInfoModel> {
    return this.http.post<UserInfoModel>(`${url.API}/sign-up`, credentials);
  }
}
