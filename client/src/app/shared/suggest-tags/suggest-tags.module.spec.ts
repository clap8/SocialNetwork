import { SuggestTagsModule } from './suggest-tags.module';

describe('SuggestTagsModule', () => {
  let suggestTagsModule: SuggestTagsModule;

  beforeEach(() => {
    suggestTagsModule = new SuggestTagsModule();
  });

  it('should create an instance', () => {
    expect(suggestTagsModule).toBeTruthy();
  });
});
