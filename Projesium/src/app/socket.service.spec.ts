/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SocketService } from './services/socket.service';

describe('Service: Socket', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketService]
    });
  });

  it('should ...', inject([SocketService], (service: SocketService) => {
    expect(service).toBeTruthy();
  }));
});
