import { Component, OnInit } from '@angular/core';
import { ballBet } from '../models/models';
import { GameService } from '../services/game-service/game.service';

@Component({
  selector: 'app-game-layout',
  templateUrl: './game-layout.component.html',
  styleUrls: ['./game-layout.component.scss']
})
export class GameLayoutComponent implements OnInit {

  ballNumbers: Array <ballBet> = []

  constructor(
    public gameService: GameService
  ) {
      this.ballNumbers = this.gameService.ballBets;

   }

  ngOnInit(): void {
  }

}
