import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ballBet } from '../../models/models';
import { GameService } from '../../services/game-service/game.service';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent implements OnInit {
  
  @Input() balls: Array<ballBet> = []
  @Input() beatNumbers: Array<number> = []

  betForm: FormGroup;
  
  constructor(

    public gameService: GameService
    ) { 

      this.betForm = new FormGroup({

          numbers: new FormControl(this.beatNumbers, Validators.required),
          moneyBet:  new FormControl(0, [Validators.required, Validators.min(5)])
      })
  
    }
    
    ngOnInit(): void {
  }
  
  changeBeat(number: number): void{

    if(!this.beatNumbers.includes(number)) return
    this.gameService.changeBeat(number)
  }
  placeBeat(){
    
    this.betForm.markAllAsTouched()
    console.log(this.betForm);
    if(this.betForm.invalid) return
    this.gameService.isGaming= false;
    this.gameService.getWinNumber();
  }
  invalidField(field: string){

    return this.betForm.get(field)?.invalid && this.betForm.get(field)?.touched;
  }

}
