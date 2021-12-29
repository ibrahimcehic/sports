import { Component, OnInit } from '@angular/core';
import { ICatergory } from '../shared/models/category';
import { ISport } from '../shared/models/sport';
import { SportService } from '../shared/services/sport.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sports: ISport[] = [];
  categories: ICatergory[] = [];
  idSport: number = 0;

  constructor(private service: SportService) { }

  ngOnInit(): void {
    this.service.getSport().subscribe(sports =>{this.sports = sports.sort((a,b) => a.id - b.id)});
   
  }
  show():void{
    console.log('lista', this.categories);
  }
 changeSport(sportId: number){
  this.service.getCategory(sportId).subscribe(categories =>{this.categories = categories});
  
 }
}
