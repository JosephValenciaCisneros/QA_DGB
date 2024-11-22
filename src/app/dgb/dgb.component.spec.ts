import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgbComponent } from './dgb.component';

describe('DgbComponent', () => {
  let component: DgbComponent;
  let fixture: ComponentFixture<DgbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
