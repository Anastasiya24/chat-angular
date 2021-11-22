import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import getUserIdService from './getUserId.service';
@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  public messageSubject = new BehaviorSubject([]);
  public messagesList = this.messageSubject.asObservable().pipe();

  constructor(private apiService: ApiService) {}

  get(): Observable<any> {
    const id = getUserIdService();
    return this.apiService
      .get(`/messages/list?id=${id}`)
      .pipe(map((data) => data));
  }

  post(text: string | null): Observable<any> {
    const id = getUserIdService();
    return this.apiService
      .post(`/messages/new-message`, {
        message: {
          senderId: id,
          text,
          time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        },
      })
      .pipe(
        map((data) => {
          this.messageSubject.next(data);
          return data;
        })
      );
  }
}
