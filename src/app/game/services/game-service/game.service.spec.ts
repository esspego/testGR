import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add number to beat', ()=>{
    service.changeBeat(3)
    expect(service.beat.numbers.includes(3)).toBeTrue()
  })
  it('should remove number to beat', ()=>{
    service.beat.numbers = [5]
    service.changeBeat(5)
    expect(service.beat.numbers.includes(5)).toBeFalse()
  })
  it('should get win number and profit', ()=>{
    service.placeBeat(10);
    
    expect(service.winBall.number).toBeGreaterThan(0)
    expect(service.winBall.number).toBeLessThanOrEqual(10)
    if(service.beat.numbers.includes(service.winBall.number)){
      expect(service.profit).toBeGreaterThan(0)
    }
  })
  it('should restart the game', () =>{
    service.resetGame();
    expect(service.beat.numbers.length).toBe(0)
    expect(service.beat.price).toBe(0)
    expect(service.profit).toBe(0)
    expect(service.isGaming).toBeTrue()
  })
});
