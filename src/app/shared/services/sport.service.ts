import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISport } from '../models/sport';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  url = "http://devmeta.multifeedcenter.com/Sport/all"
  
  constructor(public http: HttpClient) { }
  getSport(): Observable<ISport[]>{
    return this.http.get<ISport[]>(this.url)
  }
}
