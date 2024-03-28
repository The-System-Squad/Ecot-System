import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatererDetailsPage } from './caterer-details.page';

describe('CatererDetailsPage', () => {
  let component: CatererDetailsPage;
  let fixture: ComponentFixture<CatererDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatererDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
