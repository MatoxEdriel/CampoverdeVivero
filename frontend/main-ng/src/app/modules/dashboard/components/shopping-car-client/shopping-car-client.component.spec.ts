import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCarClientComponent } from './shopping-car-client.component';

describe('ShoppingCarClientComponent', () => {
  let component: ShoppingCarClientComponent;
  let fixture: ComponentFixture<ShoppingCarClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCarClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCarClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
