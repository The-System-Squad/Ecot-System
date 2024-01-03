import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ChefDetailsPage } from './chef-details.page';

describe('ChefDetailsPage', () => {
  let component: ChefDetailsPage;
  let fixture: ComponentFixture<ChefDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChefDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
