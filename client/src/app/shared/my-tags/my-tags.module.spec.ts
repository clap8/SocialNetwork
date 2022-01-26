import { MyTagsModule } from './my-tags.module';

describe('MyTagsModule', () => {
  let myTagsModule: MyTagsModule;

  beforeEach(() => {
    myTagsModule = new MyTagsModule();
  });

  it('should create an instance', () => {
    expect(myTagsModule).toBeTruthy();
  });
});
