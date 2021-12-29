import { Component, OnInit } from '@angular/core';
import { ICountry } from '../shared/models/countries';
import { CountriesService } from '../shared/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: ICountry[] = [];

  constructor(private service: CountriesService) { }

  ngOnInit(): void {
    this.service.getCountry().subscribe(countries =>{this.countries = countries})
  }
  show():void{
    console.log('coutries', this.countries);
  }

}
