import { UserCardModule } from './user-card.module';

describe('UserCardModule', () => {
  let UserCardModule: UserCardModule;

  beforeEach(() => {
    UserCardModule = new UserCardModule();
  });

  it('should create an instance', () => {
    expect(UserCardModule).toBeTruthy();
  });
});
