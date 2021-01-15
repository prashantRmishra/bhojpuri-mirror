import { TestBed } from '@angular/core/testing';

import { UploadHindiSamacharPDFService } from './upload-hindi-samachar-pdf.service';

describe('UploadHindiSamacharPDFService', () => {
  let service: UploadHindiSamacharPDFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadHindiSamacharPDFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
