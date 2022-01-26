//////////////////////////////////////////////////////////////////////////////////////////////
// USERS PROFILE CONTROLLER
//////////////////////////////////////////////////////////////////////////////////////////////
import _ from 'lodash';
import express, { Request } from 'express';
import bcrypt from 'bcryptjs';
import AuthGuard from '@lib/auth-guard/auth-guard';
//--------------------------------------------------------------------------------------------
import { APIError, APICodes, HttpStatus } from '@api/common/utils/api-error';
import { UpdateMyProfileDto, ChangePasswordDto } from './dto/users-me.dto';
//--------------------------------------------------------------------------------------------

let router = express.Router();

//
// Controller globals security
//
router.all('/', AuthGuard());

//
// [GET /] - get information about me
//
router.get('/', async (req, res) => {
  res.json(req.user);
});

//
// [UPDATE /] - update my profile
//
router.put('/', async (req, res) => {
  let data = new UpdateMyProfileDto(req.body);
  let user = _.extend(req.user, data);

  let userSaved = await user.save();
  res.json(userSaved);
});

//
// [POST /change-password] - change my password
//
router.post('/change-password', async (req, res) => {
  let data = new ChangePasswordDto(req.body);

  let passwordIsValid = bcrypt.compareSync(data.currentPassword, req.user.password);
  if (!passwordIsValid) throw new APIError('Password wrong !', APICodes.AUTH_PASSWORD_WRONG, HttpStatus.UNAUTHORIZED, true);

  let user = req.user;
  user.password = bcrypt.hashSync(data.newPassword, 8);

  await user.save();
  res.send('success');
});

export default router;

//--------------------------------------------------------------------------------------------
// SUB-ROUTINES IF NEEDED
//--------------------------------------------------------------------------------------------