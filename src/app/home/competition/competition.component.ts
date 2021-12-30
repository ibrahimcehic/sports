import { Component, Input, OnInit, Output } from '@angular/core';
import { ICompetition } from 'src/app/shared/models/competition';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
  

@Input() competitions: ICompetition[] = [];
@Output() idComp = new EventEmitter;

  
  constructor() { }

  ngOnInit(): void {
  }

getCompetitionId(id: number){
  console.log('competition id ', id);
  this.idComp.emit(id);
}
}
