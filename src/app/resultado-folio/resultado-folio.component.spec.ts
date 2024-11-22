import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoFolioComponent } from './resultado-folio.component';

describe('ResultadoFolioComponent', () => {
  let component: ResultadoFolioComponent;
  let fixture: ComponentFixture<ResultadoFolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoFolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoFolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
