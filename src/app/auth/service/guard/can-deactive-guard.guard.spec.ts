import { TestBed } from '@angular/core/testing';

import { CanDeactiveGuardGuard } from './can-deactive-guard.guard';
import { DialogService } from 'src/app/shared/services/dialog.service';
let isPromise = true;
class MockDialogService {
  canDeactivate() {
    return new Promise((resolve, reject) => {
      if (isPromise) {
        resolve('Deactivate works');
      } else {
        reject('Deactivate error');
      }
    });
  }
}
describe('CanDeactiveGuardGuard', () => {
  let guard: CanDeactiveGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: DialogService, useClass: MockDialogService }],
    });
    guard = TestBed.inject(CanDeactiveGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
