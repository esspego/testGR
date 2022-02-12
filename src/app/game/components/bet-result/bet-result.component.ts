import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ballBet } from '../../models/models';

@Component({
  selector: 'app-bet-result',
  templateUrl: './bet-result.component.html',
  styleUrls: ['./bet-result.component.scss']
})
export class BetResultComponent implements OnInit {

  @Input() winNumber: ballBet = {
    number: 0,
    color: ''
  } ;
  @Input() profit: number = 0;

  @Output() resetGameEvent= new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }
  resetGame(){
    this.resetGameEvent.emit()
  }


}
