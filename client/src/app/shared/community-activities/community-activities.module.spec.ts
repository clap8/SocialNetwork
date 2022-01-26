import { CommunityActivitiesModule } from './community-activities.module';

describe('CommunityActivitiesModule', () => {
  let modCommunityActivitiesModule: CommunityActivitiesModule;

  beforeEach(() => {
    modCommunityActivitiesModule = new CommunityActivitiesModule();
  });

  it('should create an instance', () => {
    expect(modCommunityActivitiesModule).toBeTruthy();
  });
});
