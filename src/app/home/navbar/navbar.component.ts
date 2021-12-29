import { Component, Input, OnInit } from '@angular/core';
import { ICatergory } from 'src/app/shared/models/category';
import { ISport } from 'src/app/shared/models/sport';
import { SportService } from 'src/app/shared/services/sport.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

@Input() sports: ISport[] = [];
@Output() idEmit = new EventEmitter;

categories: ICatergory[] = [];

  constructor(private service: SportService) { }

  ngOnInit(): void {
  }

  getIdFromButton(id: number){
      console.log('id', id)
    
    this.idEmit.emit(id);
   
  }
}
