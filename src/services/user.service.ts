import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { ApiService } from './api.service';
import getUserIdService from './getUserId.service';

@Injectable()
export class UserService {
  public userNameSubject = new BehaviorSubject('');
  public userName = this.userNameSubject.asObservable().pipe(distinctUntilChanged());

  constructor(private apiService: ApiService) {}

  get(): Observable<any> {
    const id = getUserIdService();
    return this.apiService
      .get(`/user/info?id=${id}`)
      .pipe(map((data) => data.name));
  }

  post(newName: string | null): Observable<any> {
    const id = getUserIdService();
    return this.apiService
      .post(`/user/edit-user-name?id=${id}`, { newName })
      .pipe(
        map(data => {
          localStorage.setItem('id', data?.id);
          this.userNameSubject.next(data?.name);
          return data?.name;
        })
      );
  }
}
