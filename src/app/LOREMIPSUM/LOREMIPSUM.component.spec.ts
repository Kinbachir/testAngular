import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LOREMIPSUMComponent } from './LOREMIPSUM.component';

describe('LOREMIPSUMComponent', () => {
  let component: LOREMIPSUMComponent;
  let fixture: ComponentFixture<LOREMIPSUMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LOREMIPSUMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LOREMIPSUMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
