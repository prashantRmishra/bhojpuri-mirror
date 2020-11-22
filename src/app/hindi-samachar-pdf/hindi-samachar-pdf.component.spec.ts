import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiSamacharPDFComponent } from './hindi-samachar-pdf.component';

describe('HindiSamacharPDFComponent', () => {
  let component: HindiSamacharPDFComponent;
  let fixture: ComponentFixture<HindiSamacharPDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HindiSamacharPDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HindiSamacharPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
