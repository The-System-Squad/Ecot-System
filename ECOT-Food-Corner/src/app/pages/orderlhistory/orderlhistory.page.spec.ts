import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderlhistoryPage } from './orderlhistory.page';

describe('OrderlhistoryPage', () => {
  let component: OrderlhistoryPage;
  let fixture: ComponentFixture<OrderlhistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrderlhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

