import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICountry } from '../models/countries';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  url = "http://devmeta.multifeedcenter.com/Country/all"

  constructor(public http: HttpClient) { }
  getCountry(): Observable<ICountry[]>{
    return this.http.get<ICountry[]>(this.url)
  }
}
