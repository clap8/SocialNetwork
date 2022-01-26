import { CommunityPageModule } from './community-page.module';

describe('CommunityPageModule', () => {
  let communityPageModule: CommunityPageModule;

  beforeEach(() => {
    communityPageModule = new CommunityPageModule();
  });

  it('should create an instance', () => {
    expect(communityPageModule).toBeTruthy();
  });
});
