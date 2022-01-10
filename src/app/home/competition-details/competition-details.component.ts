import { Component, Input, OnInit, Output } from '@angular/core';
import { ICompDet } from 'src/app/shared/models/competition-details';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-competition-details',
  templateUrl: './competition-details.component.html',
  styleUrls: ['./competition-details.component.css']
})
export class CompetitionDetailsComponent implements OnInit {

  @Input() comDetails: ICompDet[] = [];
  @Output() idComDet = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
  getCompDetId(id: number){
    console.log('competition id ', id);
   this.idComDet.emit(id);
  }
}
