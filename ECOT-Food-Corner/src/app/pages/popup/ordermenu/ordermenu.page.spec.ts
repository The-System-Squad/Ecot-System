import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdermenuPage } from './ordermenu.page';

describe('OrdermenuPage', () => {
  let component: OrdermenuPage;
  let fixture: ComponentFixture<OrdermenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrdermenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
