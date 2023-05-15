import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderCheckoutComponent } from './render-checkout.component';

describe('RenderCheckoutComponent', () => {
  let component: RenderCheckoutComponent;
  let fixture: ComponentFixture<RenderCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
