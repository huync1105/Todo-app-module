import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelBtnComponent } from './del-btn.component';

describe('DelBtnComponent', () => {
  let component: DelBtnComponent;
  let fixture: ComponentFixture<DelBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
