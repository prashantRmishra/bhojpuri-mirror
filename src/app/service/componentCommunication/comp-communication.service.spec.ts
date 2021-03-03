import { TestBed } from '@angular/core/testing';

import { CompCommunicationService } from './comp-communication.service';

describe('CompCommunicationService', () => {
  let service: CompCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
