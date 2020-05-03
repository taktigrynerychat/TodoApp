import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private categoriesUpdated$ = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  get categoriesUpdated() {
    return this.categoriesUpdated$.asObservable();
  }

  set categoriesUpdated(value: any) {
    this.categoriesUpdated$.next(value);
  }

}
