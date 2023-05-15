import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderShopComponent } from './render-shop.component';

describe('RenderShopComponent', () => {
  let component: RenderShopComponent;
  let fixture: ComponentFixture<RenderShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
