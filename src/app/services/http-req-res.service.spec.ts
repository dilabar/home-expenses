import { TestBed } from '@angular/core/testing';
import { HttpReqResService } from './http-req-res.service';



describe('HttpReqResServiceService', () => {
  let service: HttpReqResService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpReqResService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
