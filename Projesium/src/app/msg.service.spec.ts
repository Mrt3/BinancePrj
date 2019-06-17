/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MsgService } from './services/msg.service';

describe('Service: Msg', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsgService]
    });
  });

  it('should ...', inject([MsgService], (service: MsgService) => {
    expect(service).toBeTruthy();
  }));
});
