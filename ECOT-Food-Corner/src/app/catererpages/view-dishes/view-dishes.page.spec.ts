import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewDishesPage } from './view-dishes.page';

describe('ViewDishesPage', () => {
  let component: ViewDishesPage;
  let fixture: ComponentFixture<ViewDishesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewDishesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
