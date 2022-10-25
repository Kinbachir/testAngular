import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LOREMComponent } from './LOREM.component';

describe('LOREMComponent', () => {
  let component: LOREMComponent;
  let fixture: ComponentFixture<LOREMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LOREMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LOREMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
