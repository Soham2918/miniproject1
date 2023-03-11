import { TestBed } from '@angular/core/testing';

import { ForgetPwdService } from './forget-pwd.service';

describe('ForgetPwdService', () => {
  let service: ForgetPwdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgetPwdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
