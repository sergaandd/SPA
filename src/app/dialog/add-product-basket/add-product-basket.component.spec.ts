import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductBasketComponent } from './add-product-basket.component';

describe('AddProductBasketComponent', () => {
  let component: AddProductBasketComponent;
  let fixture: ComponentFixture<AddProductBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductBasketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
