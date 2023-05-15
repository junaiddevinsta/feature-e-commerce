import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderWishlistComponent } from './render-wishlist.component';

describe('RenderWishlistComponent', () => {
  let component: RenderWishlistComponent;
  let fixture: ComponentFixture<RenderWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderWishlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
