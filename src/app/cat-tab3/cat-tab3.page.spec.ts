import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatTab3Page } from './cat-tab3.page';

describe('CatTab3Page', () => {
  let component: CatTab3Page;
  let fixture: ComponentFixture<CatTab3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatTab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
