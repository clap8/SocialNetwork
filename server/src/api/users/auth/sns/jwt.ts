import passport from 'passport';
import passportJwt from 'passport-jwt';
//--------------------------------------------------------------------------------------------
import config from '@config';
import { User } from '../../models/user.model';
//--------------------------------------------------------------------------------------------

const options = {
  jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.get('authentication.token.secret'),
  issuer: config.get('authentication.token.issuer'),
  audience: config.get('authentication.token.audience')
};

passport.use(new passportJwt.Strategy(options, async (payload, done) => {
  const user = await User.findById(payload.sub);

  if (user) {
    return done(null, user, payload);
  }

  return done(null);
}));