import { TestBed } from '@angular/core/testing';

import { HomeTileImageService } from './home-tile-image.service';

describe('HomeTileImageService', () => {
  let service: HomeTileImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeTileImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
