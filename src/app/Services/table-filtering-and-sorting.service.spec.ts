import { TestBed } from '@angular/core/testing';

import { TableFilteringAndSortingService } from './table-filtering-and-sorting.service';

describe('TableFilteringAndSortingService', () => {
  let service: TableFilteringAndSortingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableFilteringAndSortingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
