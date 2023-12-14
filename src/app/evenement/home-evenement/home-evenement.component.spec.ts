import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEvenementComponent } from './home-evenement.component';

describe('HomeEvenementComponent', () => {
  let component: HomeEvenementComponent;
  let fixture: ComponentFixture<HomeEvenementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeEvenementComponent]
    });
    fixture = TestBed.createComponent(HomeEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
