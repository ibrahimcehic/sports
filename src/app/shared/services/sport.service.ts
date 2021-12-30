import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISport } from '../models/sport';
import { ICatergory } from '../models/category';
import { ICompetition } from '../models/competition';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  url = "http://devmeta.multifeedcenter.com"

  constructor(public http: HttpClient) { }
  getSport(): Observable<ISport[]>{
    return this.http.get<ISport[]>(this.url + '/Sport/all')
  }
  getCategory(id: number): Observable<ICatergory[]>{
    return this.http.get<ICatergory[]>(this.url + '/Category/sport/' + id)}

  getCompetition(idC: number): Observable<ICompetition[]>{
    return this.http.get<ICompetition[]>(this.url + '/Competition/category/' + idC)
  }
}
