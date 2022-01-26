import jwt from 'jsonwebtoken';
//--------------------------------------------------------------------------------------------
import config from '@config';
//--------------------------------------------------------------------------------------------

export function generateAccessToken(userId) {
  const expiresIn = '1 hour';
  const issuer = config.get('authentication.token.issuer');
  const audience = config.get('authentication.token.audience');
  const secret = config.get('authentication.token.secret');

  const token = jwt.sign({}, secret, {
    expiresIn: expiresIn,
    audience: audience,
    issuer: issuer,
    subject: userId.toString()
  });

  return token;
}