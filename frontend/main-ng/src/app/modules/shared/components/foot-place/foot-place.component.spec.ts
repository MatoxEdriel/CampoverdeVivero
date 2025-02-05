import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootPlaceComponent } from './foot-place.component';

describe('FootPlaceComponent', () => {
  let component: FootPlaceComponent;
  let fixture: ComponentFixture<FootPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FootPlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
