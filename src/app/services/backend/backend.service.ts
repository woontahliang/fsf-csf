import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private city: string = "";
  resultChange: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) { }

  setCity(city) {
    console.log("BackendService setCity!");

    this.city = city.trim();
  }

  registerData(data: User): Observable<any> {
    console.log("BackendService registerData!");
    console.log(data);

    return this.http.post<any>(environment.registration_url, data).pipe(catchError(this.handleError('registerData', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
