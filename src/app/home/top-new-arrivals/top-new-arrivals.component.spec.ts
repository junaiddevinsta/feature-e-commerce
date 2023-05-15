import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNewArrivalsComponent } from './top-new-arrivals.component';

describe('TopNewArrivalsComponent', () => {
  let component: TopNewArrivalsComponent;
  let fixture: ComponentFixture<TopNewArrivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNewArrivalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNewArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
