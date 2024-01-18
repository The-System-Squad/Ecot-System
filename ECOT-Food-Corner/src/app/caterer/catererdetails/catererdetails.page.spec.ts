import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatererdetailsPage } from './catererdetails.page';

describe('CatererdetailsPage', () => {
  let component: CatererdetailsPage;
  let fixture: ComponentFixture<CatererdetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatererdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
