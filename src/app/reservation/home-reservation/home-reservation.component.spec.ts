import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReservationComponent } from './home-reservation.component';

describe('HomeReservationComponent', () => {
  let component: HomeReservationComponent;
  let fixture: ComponentFixture<HomeReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeReservationComponent]
    });
    fixture = TestBed.createComponent(HomeReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
