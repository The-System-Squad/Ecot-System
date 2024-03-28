import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPicPage } from './add-pic.page';

describe('AddPicPage', () => {
  let component: AddPicPage;
  let fixture: ComponentFixture<AddPicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddPicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
