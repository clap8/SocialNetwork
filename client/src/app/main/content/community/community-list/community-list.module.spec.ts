import { CommunityListModule } from './search.module';

describe('CommunityListModule', () => {
  let communityListModule: CommunityListModule;

  beforeEach(() => {
    communityListModule = new CommunityListModule();
  });

  it('should create an instance', () => {
    expect(communityListModule).toBeTruthy();
  });
});
