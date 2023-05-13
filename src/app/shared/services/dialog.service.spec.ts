import { TestBed } from '@angular/core/testing';

import { DialogService } from './dialog.service';

class MockDialogService{

}
describe('DialogService', () => {
  let service: DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide:DialogService,useClass:MockDialogService}
      ]
    });
    service = TestBed.inject(DialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
