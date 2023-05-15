import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderAboutComponent } from './render-about.component';

describe('RenderAboutComponent', () => {
  let component: RenderAboutComponent;
  let fixture: ComponentFixture<RenderAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
