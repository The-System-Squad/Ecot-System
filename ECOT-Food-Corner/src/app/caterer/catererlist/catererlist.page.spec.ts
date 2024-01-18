import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatererlistPage } from './catererlist.page';

describe('CatererlistPage', () => {
  let component: CatererlistPage;
  let fixture: ComponentFixture<CatererlistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatererlistPage);
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

