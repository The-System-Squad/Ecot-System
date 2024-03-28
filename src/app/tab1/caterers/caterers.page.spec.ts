import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaterersPage } from './caterers.page';

describe('CaterersPage', () => {
  let component: CaterersPage;
  let fixture: ComponentFixture<CaterersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaterersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
