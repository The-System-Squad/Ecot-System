import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPaymentPage } from './view-payment.page';

describe('ViewPaymentPage', () => {
  let component: ViewPaymentPage;
  let fixture: ComponentFixture<ViewPaymentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
