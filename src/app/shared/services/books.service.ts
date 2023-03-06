import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { environment } from 'src/app/environment/environment';
import { User } from '../models/user.model';

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'


@Injectable({providedIn: 'root'})
export class BooksService {

  constructor(private httpClient: HttpClient) { }


}
