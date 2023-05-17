import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCancellationsComponent } from './user-cancellations.component';

describe('UserCancellationsComponent', () => {
  let component: UserCancellationsComponent;
  let fixture: ComponentFixture<UserCancellationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCancellationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCancellationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
