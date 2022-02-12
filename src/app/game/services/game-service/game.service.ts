import { Injectable } from '@angular/core';
import { ballBet, Beat } from '../../models/models';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  ballNumbers: Array<number> = [1,2,3,4,5,6,7,8,9,10];
  colors: Array<string> = ['is-primary', 'is-info','is-success', 'is-danger', 'is-warning'];
  
  ballBets: Array<ballBet> = this.ballNumbers.map((number,index) => {
      let ballBet= {
        number: number,
        color: index >= this.colors.length ? this.colors[this.ballNumbers.length -index-1] : this.colors[index]
     }
     return ballBet
  })

  beat: Beat = {
    numbers: [],
    price: 0
  };

  winBall: ballBet= {
    number: 0,
    color: ''
  }
  profit: number = 0;
  isGaming: Boolean = true;

  constructor() { 
  }
  placeBeat(moneyBet: number): void {
    this.beat.price = moneyBet;
    this.isGaming = false;

    let winNumber = Math.floor(Math.random() * 10)+ 1;
    let winBall = this.ballBets.find(ballBet => ballBet.number === winNumber);
    this.winBall = winBall !== undefined ? winBall: this.winBall;

    if(this.beat.numbers.includes(winNumber)){
      this.profit = Number((this.beat.price *1.5).toFixed(2));
    }
  }
  changeBeat(number:number): void{

    if(this.beat.numbers.includes(number)){
      this.beat.numbers = this.beat.numbers.filter( beatNumber => beatNumber !== number)
    }else{
      this.beat.numbers.push(number)
    }
  }
  resetGame(): void{
    this.beat = {
      numbers: [],
      price: 0,
    };
    this.profit = 0;
    this.isGaming = true;
  }
}
