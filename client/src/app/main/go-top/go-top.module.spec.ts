import { GoTopModule } from './go-top.module';

describe('GoTopModule', () => {
  let goTopModule: GoTopModule;

  beforeEach(() => {
    goTopModule = new GoTopModule();
  });

  it('should create an instance', () => {
    expect(goTopModule).toBeTruthy();
  });
});
