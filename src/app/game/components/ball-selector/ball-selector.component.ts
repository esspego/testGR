import { Component, Input, OnInit } from '@angular/core';
import { ballBet } from '../../models/models';
import { GameService } from '../../services/game-service/game.service';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss']
})
export class BallSelectorComponent implements OnInit {

  @Input() balls: Array<ballBet> = []
  @Input() beatNumbers: Array<number> = []

  constructor(

    public gameService: GameService,
  ) {
  }

  ngOnInit(): void {
  }

  changeBeat(number: number): void {

    this.gameService.changeBeat(number)
  }

  resetBeat() {
    this.gameService.beat.numbers = []
  }

}
