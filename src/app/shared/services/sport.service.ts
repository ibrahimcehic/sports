import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISport } from '../models/sport';
import { ICatergory } from '../models/category';
import { ICompetition } from '../models/competition';
import { ICompDet } from '../models/competition-details';
import { IPlayers } from '../models/players';
import { IPlayer } from '../models/player';
import { ICountry } from '../models/country';

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
  getCompetitionDetais(idComDet: number): Observable<ICompDet[]>{
    return this.http.get<ICompDet[]>(this.url + '/Competitor/competition/' + idComDet)
  }
  getPlayers(idP: number): Observable<IPlayers[]>{
    return this.http.get<IPlayers[]>(this.url + '/Player/competitor/' + idP)
  }
  getPlayer(idPlayer: number): Observable<IPlayer>{
    return this.http.get<IPlayer>(this.url + '/Player/' + idPlayer)
  }
  getCountry(idCountry: number): Observable<ICountry>{
    return this.http.get<ICountry>(this.url + '/Country/' + idCountry)
  }
}
