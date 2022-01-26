import { SuggestCommunitysModule } from './suggest-communities.module';

describe('SuggestCommunitysModule', () => {
  let suggestCommunitysModule: SuggestCommunitysModule;

  beforeEach(() => {
    suggestCommunitysModule = new SuggestCommunitysModule();
  });

  it('should create an instance', () => {
    expect(suggestCommunitysModule).toBeTruthy();
  });
});
