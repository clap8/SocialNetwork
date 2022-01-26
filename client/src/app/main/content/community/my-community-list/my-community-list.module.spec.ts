import { MyCommunityListModule } from './my-community-list.module';

describe('MyCommunityListModule', () => {
  let myCommunityListModule: MyCommunityListModule;

  beforeEach(() => {
    myCommunityListModule = new MyCommunityListModule();
  });

  it('should create an instance', () => {
    expect(myCommunityListModule).toBeTruthy();
  });
});
