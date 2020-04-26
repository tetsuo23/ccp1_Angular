import { TestBed } from '@angular/core/testing';

import { PostShowService } from "./PostShowService";

describe('PostShowService', () => {
  let service: PostShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
