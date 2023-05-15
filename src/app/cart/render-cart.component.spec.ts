import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderCartComponent } from './render-cart.component';

describe('RenderCartComponent', () => {
  let component: RenderCartComponent;
  let fixture: ComponentFixture<RenderCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
