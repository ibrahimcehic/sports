import { Component, OnInit } from '@angular/core';
import { ISport } from '../shared/models/sport';
import { SportService } from '../shared/services/sport.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sports: ISport[] = [];

  constructor(private service: SportService) { }

  ngOnInit(): void {
    this.service.getSport().subscribe(sports =>{this.sports = sports})
  }
  show():void{
    console.log('lista', this.sports);
  }
  
}
