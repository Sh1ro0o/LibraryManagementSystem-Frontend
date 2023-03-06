import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { environment } from 'src/app/environment/environment';
import { User } from '../models/user.model';

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'


@Injectable({providedIn: 'root'})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient
    .get<User[]>(environment.baseApiUrl + '/api/Users')
    .pipe(map(data => {
      let usersArray: User[] = [];
      for(const key in data) {
        //convert the date we receive from the database into Date object
        data[key].dateOfBirth = new Date(data[key].dateOfBirth);
      }
      usersArray = data;
      console.log(usersArray);

      return usersArray;
    }))
  }
}
