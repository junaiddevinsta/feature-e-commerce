import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReturnsComponent } from './user-returns.component';

describe('UserReturnsComponent', () => {
  let component: UserReturnsComponent;
  let fixture: ComponentFixture<UserReturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReturnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
