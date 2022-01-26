import { MeetPlaceModule } from './meet-place.module';

describe('MeetPlaceModule', () => {
  let meetPlaceModule: MeetPlaceModule;

  beforeEach(() => {
    meetPlaceModule = new MeetPlaceModule();
  });

  it('should create an instance', () => {
    expect(meetPlaceModule).toBeTruthy();
  });
});
