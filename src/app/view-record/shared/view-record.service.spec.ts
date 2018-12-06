import { TestBed } from '@angular/core/testing';

import { ViewRecordService } from './view-record.service';

describe('ViewRecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewRecordService = TestBed.get(ViewRecordService);
    expect(service).toBeTruthy();
  });
});
