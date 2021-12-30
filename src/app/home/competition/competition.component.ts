import { Component, Input, OnInit, Output } from '@angular/core';
import { ICompetition } from 'src/app/shared/models/competition';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

@Input() competitions: ICompetition[] = [];

  
  constructor() { }

  ngOnInit(): void {
  }

getCompetitionId(id: number){
  
}
}
