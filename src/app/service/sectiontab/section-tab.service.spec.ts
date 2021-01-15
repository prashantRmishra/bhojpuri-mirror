import { TestBed } from '@angular/core/testing';

import { SectionTabService } from './section-tab.service';

describe('SectionTabService', () => {
  let service: SectionTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
