import { Component, OnInit } from '@angular/core';
import { ballBet } from '../models/models';
import { GameService } from '../services/game-service/game.service';

@Component({
  selector: 'app-game-layout',
  templateUrl: './game-layout.component.html',
  styleUrls: ['./game-layout.component.scss']
})
export class GameLayoutComponent implements OnInit {

  ballNumbers: Array<ballBet> = []
  isReset: Boolean = false;

  constructor(
    
    public gameService: GameService
  ) {
    this.ballNumbers = this.gameService.ballBets;

  }

  ngOnInit(): void {
  }

  placeBeat(moneyBet: number) {

    this.gameService.placeBeat(moneyBet);
  }

  resetGame() {

    this.isReset = !this.isReset;
    this.gameService.resetGame();
  }

}
