import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from '../profile';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http : HttpClient
  ) { }

  fetchProfile() {
    return this.http.get<{[key: string]: Profile}>('https://dummyjson.com/users')
    .pipe(map((res) => {
      const profile = [];
      for(const key in res) {
        if(res.hasOwnProperty(key)) {
          profile.push(res[key])
        }
      }
      return profile  ;
    }))

  }
}
