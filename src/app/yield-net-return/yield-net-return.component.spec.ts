import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldNetReturnComponent } from './yield-net-return.component';

describe('YieldNetReturnComponent', () => {
  let component: YieldNetReturnComponent;
  let fixture: ComponentFixture<YieldNetReturnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YieldNetReturnComponent]
    });
    fixture = TestBed.createComponent(YieldNetReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
