import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatTab1Page } from './cat-tab1.page';

describe('CatTab1Page', () => {
  let component: CatTab1Page;
  let fixture: ComponentFixture<CatTab1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatTab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
