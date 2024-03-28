import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatTabsPage } from './cat-tabs.page';

describe('CatTabsPage', () => {
  let component: CatTabsPage;
  let fixture: ComponentFixture<CatTabsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
