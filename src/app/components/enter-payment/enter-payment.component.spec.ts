import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterPaymentComponent } from './enter-payment.component';

describe('EnterPaymentComponent', () => {
  let component: EnterPaymentComponent;
  let fixture: ComponentFixture<EnterPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
