import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatererregPage } from './catererreg.page';

describe('CatererregPage', () => {
  let component: CatererregPage;
  let fixture: ComponentFixture<CatererregPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatererregPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
