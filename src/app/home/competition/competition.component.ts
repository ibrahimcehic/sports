import { Component, Input, OnInit, Output } from '@angular/core';
import { ICompetition } from 'src/app/shared/models/competition';
import { EventEmitter } from '@angular/core';
import { ICompDet } from 'src/app/shared/models/competition-details';


@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
  

@Input() competitions: ICompetition[] = [];
@Input() comDetails: ICompDet[] = [];
@Output() compId = new EventEmitter;
@Output() competitorId = new EventEmitter;
@Output() activeCompetition = new EventEmitter;

idCompetition: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

getCompetitionId(id: number){
  console.log('competition id ', id);
  this.compId.emit(id);
  this.idCompetition = id;
  this.activeCompetition.emit();
}
getCompetitorId(id: number)
{
  console.log('competitor id ', id);
  this.competitorId.emit(id);
}
}
