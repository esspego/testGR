import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetSlipComponent } from './bet-slip.component';

describe('BetSlipComponent', () => {
  let component: BetSlipComponent;
  let fixture: ComponentFixture<BetSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetSlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form should be invalid', () => {
    component.betForm.markAllAsTouched()
    expect(component.invalidField('moneyBet')).toBeTrue();
    component.betForm.setValue({moneyBet:3})
    expect(component.invalidField('moneyBet')).toBeTrue();
  });
  it('form should be valid', () => {
    component.betForm.setValue({moneyBet:10})
    expect(component.invalidField('moneyBet')).toBeFalse();
  });
});
