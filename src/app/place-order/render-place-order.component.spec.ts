import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderPlaceOrderComponent } from './render-place-order.component';

describe('RenderPlaceOrderComponent', () => {
  let component: RenderPlaceOrderComponent;
  let fixture: ComponentFixture<RenderPlaceOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderPlaceOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderPlaceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
