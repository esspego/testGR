import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
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
  @Input() resetBeat: Boolean = false;

  @Output() placeBeatEvent = new EventEmitter<number>();

  betForm: FormGroup = new FormGroup({});
  isSubmitedForm: boolean = false;

  constructor(
    public gameService: GameService
  ) { }

  ngOnInit(): void {

    this.betForm = new FormGroup({

      moneyBet: new FormControl(0, [Validators.required, Validators.min(5)])
    })
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['resetBeat'] && !changes['resetBeat'].firstChange) {
      this.betForm.reset();
    }
  }

  changeBeat(number: number): void {

    if (!this.beatNumbers.includes(number)) return
    this.gameService.changeBeat(number)
  }
  placeBeat() {

    this.betForm.markAllAsTouched();
    this.isSubmitedForm = true;

    if (this.betForm.invalid || this.beatNumbers.length === 0) return

    this.placeBeatEvent.emit(this.betForm.value.moneyBet);
    this.isSubmitedForm = false;
  }
  invalidField(field: string) {

    return this.betForm.get(field)?.invalid && this.betForm.get(field)?.touched;
  }

}
