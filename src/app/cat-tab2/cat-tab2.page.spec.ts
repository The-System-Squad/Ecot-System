import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatTab2Page } from './cat-tab2.page';

describe('CatTab2Page', () => {
  let component: CatTab2Page;
  let fixture: ComponentFixture<CatTab2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatTab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
