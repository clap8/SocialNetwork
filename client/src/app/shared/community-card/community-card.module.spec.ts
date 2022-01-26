import { CommunityCardModule } from './community-card.module';

describe('CommunityCardModule', () => {
  let communityCardModule: CommunityCardModule;

  beforeEach(() => {
    communityCardModule = new CommunityCardModule();
  });

  it('should create an instance', () => {
    expect(communityCardModule).toBeTruthy();
  });
});
