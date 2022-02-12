import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BallSelectorComponent } from './game/components/ball-selector/ball-selector.component';
import { BetSlipComponent } from './game/components/bet-slip/bet-slip.component';
import { GameService } from './game/services/game-service/game.service';
import { GameLayoutComponent } from './game/game-layout/game-layout.component';
import { BetResultComponent } from './game/components/bet-result/bet-result.component';

@NgModule({
  declarations: [
    AppComponent,
    BallSelectorComponent,
    BetSlipComponent,
    GameLayoutComponent,
    BetResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
