//////////////////////////////////////////////////////////////////////////////////////////////
// USER AUTH CONTROLLER
//////////////////////////////////////////////////////////////////////////////////////////////
import express from 'express';
import crypto from 'crypto';
import RandExp from 'randexp';
import passport from 'passport';
//--------------------------------------------------------------------------------------------
import { APIError, APICodes, HttpStatus } from '@api/common/utils/api-error';
import { User } from './models/user.model';
import { LoginDto, RegisterDto, ForgotPasswordDto } from './dto/users-auth.dto';
import { generateAccessToken } from './auth/generate-token';
//--------------------------------------------------------------------------------------------

import './auth/sns/jwt';
import './auth/sns/google';

let router = express.Router();

//
// [POST /login] - classic login entrypoint
//
router.post('/login', async (req, res) => {
  let data = new LoginDto(req.body);

  let user = await User.findOne({ email: data.email });
  if (!user) throw new APIError('Account does not exist', APICodes.AUTH_ACCOUNT_NOT_EXIST, HttpStatus.UNAUTHORIZED, true);

  let passwordIsValid = user.validPassword(data.password);
  if (!passwordIsValid) throw new APIError('Password wrong !', APICodes.AUTH_PASSWORD_WRONG, HttpStatus.UNAUTHORIZED, true);

  let token = generateAccessToken(user.id);
  res.json({ auth: true, token: token });
});

//
// [GET /google/login] - google api login/register
//
router.get('/google/login', passport.authenticate('google', { session: false, scope: ['openid', 'profile', 'email'] }));

router.get('/google/redirect', passport.authenticate('google', { session: false }), async (req, res) => {
  let token = generateAccessToken(req.user.id);
  res.json({ auth: true, token: token });
});

//
// [POST /register] - classic register
//
router.post('/register', async (req, res) => {
  let data = new RegisterDto(req.body);

  let user = new User(data);
  let userCreated = await user.save();
  res.json(userCreated);
});

//
// [POST /forgot] - request to reset your password
//
router.post('/forgot', async (req, res) => {
  let data = new ForgotPasswordDto(req.body);

  let user = await User.findOne({ email: data.email });
  if (!user) throw new APIError('Account does not exist', APICodes.AUTH_ACCOUNT_NOT_EXIST, HttpStatus.UNAUTHORIZED, true);

  let expire = Date.now() + 86400000;
  let token = generateResetPasswordToken();
  
  user.resetPasswordExpires = expire;
  user.resetPasswordToken = token;

  await user.save();
  res.send({passwordToken: token});
});

//
// [POST /reset] - reset your password (generate a new one)
//
router.post('/reset-password', async (req, res) => {
  let token = req.params['token'];

  let user = await User.findOne({resetPasswordToken: token});
  if (!user) throw new APIError('Invalid reset password token', APICodes.RESET_PASSWD_ERROR, HttpStatus.UNAUTHORIZED, true);

  if (user.resetPasswordExpires < Date.now()) {
    throw new APIError('Reset password token has expired', APICodes.RESET_PASSWD_ERROR, HttpStatus.UNAUTHORIZED, true);
  }

  let newGeneratedPassword = new RandExp(/\w{9}/).gen();
  user.password = newGeneratedPassword;

  await user.save();
  res.send({newPassword: newGeneratedPassword});
});

export default router;

//--------------------------------------------------------------------------------------------
// SUB-ROUTINES IF NEEDED
//--------------------------------------------------------------------------------------------

//
// GENERATE RESET PASSWORD TOKEN
//
function generateResetPasswordToken() {
  return crypto.randomBytes(128).toString('hex');
}