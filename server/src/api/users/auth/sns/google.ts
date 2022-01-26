import passport from 'passport';
import passportGoogle from 'passport-google-oauth';
//--------------------------------------------------------------------------------------------
import config from '@config';
import { User } from '../../models/user.model';
//--------------------------------------------------------------------------------------------

const options = {
  clientID: config.get('authentication.google.clientId'),
  clientSecret: config.get('authentication.google.clientSecret'),
  callbackURL: 'http://localhost:3000/api/authentication/google/redirect',
  passReqToCallback: true
};

if (options.clientID) {
  passport.use(new passportGoogle.OAuth2Strategy(options, loginOrRegister));
}

async function loginOrRegister(request, accessToken, refreshToken, profile, done) {
  let user = User.getUserByExternalId(profile.id);
  if (!user) {
    user = await User.create({ username: profile.displayName, externalId: profile.id, loginProvider: 'google' });
  }

  return done(null, user);
};