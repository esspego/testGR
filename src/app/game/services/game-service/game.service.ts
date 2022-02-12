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

  winNumber: (ballBet | undefined)= {
    number: 0,
    color: ''
  }
  
  isGaming: Boolean = true;

  constructor() { 
  }
  getWinNumber(): void {
    
    const winNumber = Math.floor(Math.random() * 10)+ 1;
    this.winNumber = this.ballBets.find(ballBet => ballBet.number === winNumber);
  }
  changeBeat(number:number): void{

    if(this.beat.numbers.includes(number)){
      this.beat.numbers = this.beat.numbers.filter( beatNumber => beatNumber !== number)
    }else{
      this.beat.numbers.push(number)
    }
  }
}
