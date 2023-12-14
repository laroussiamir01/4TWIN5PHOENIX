import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChambreComponent } from './home-chambre.component';

describe('HomeChambreComponent', () => {
  let component: HomeChambreComponent;
  let fixture: ComponentFixture<HomeChambreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeChambreComponent]
    });
    fixture = TestBed.createComponent(HomeChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
