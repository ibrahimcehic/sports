import { Component, Input, OnInit, Output } from '@angular/core';
import { IPlayers } from 'src/app/shared/models/players';
import { EventEmitter } from '@angular/core';
import { IPlayer } from 'src/app/shared/models/player';
import {Modal} from 'bootstrap' 
import { ICountry } from 'src/app/shared/models/country';



@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  @Input() players: IPlayers[] = [];
  @Input() player!: IPlayer;
  @Input() country!: ICountry;
  @Output() playerId = new EventEmitter;
  @Output() countryId = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  show(id: number, modalElement: any){
    this.playerId.emit(id);

    const modal=new Modal(modalElement);
    modal.show();
    console.log('player id from output: ', this.player);
  }
  GetCountryId(id: number)
  {
    this.countryId.emit(id);
    
  }
}
