//////////////////////////////////////////////////////////////////////////////////////////////
// USERS CONTROLLER
//////////////////////////////////////////////////////////////////////////////////////////////
import _ from 'lodash';
import express, { Request } from 'express';
import AuthGuard from '@lib/auth-guard/auth-guard';
//--------------------------------------------------------------------------------------------
import { APIError, APICodes, HttpStatus } from '@api/common/utils/api-error';
import { User } from './models/user.model';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
//--------------------------------------------------------------------------------------------

interface IGetUserInfoRequest extends Request {
  _user?: any;
};

let router = express.Router();

//
// Controller globals security
//
router.all('/', AuthGuard([{ role: 'admin' }]));

//
// [GET /] - get all users with paginate
//
router.get('/', async (req, res) => {
  const { page = 1, perPage = 10 } = req.query;
  let users = await User.paginate({}, { page: page, limit: perPage });

  res.json(users);
});

//
// [POST /] - create a new user
//
router.post('/', async (req, res) => {
  let data = new CreateUserDto(req.body);
  const user = new User(data);

  let userCreated = await user.save();
  res.json(userCreated);
});

//
// [PUT /:userId] - update an existing user
//
router.put('/:userId', async (req: IGetUserInfoRequest, res) => {
  let data = new UpdateUserDto(req.body);
  let user = _.extend(req._user, data);

  let userSaved = await user.save();
  res.json(userSaved);
});

//
// [GET /:userId] - get one user
//
router.get('/:userId', async (req: IGetUserInfoRequest, res) => {
  return res.json(req._user);
});

//
// [DELETE /:userId] - remove user 
//
router.delete('/:userId', async (req: IGetUserInfoRequest, res) => {
  let deletedUser = await User.remove(req._user);
  res.json(deletedUser);
});

//
// [PARAM userId] - preload user by id when :userId catch
//
router.param('userId', async (req: IGetUserInfoRequest, res, next, id) => {
  let user = await User.findById(id);
  if (!user) {
    throw new APIError('User not found', APICodes.ENTITY_NOT_FOUND, HttpStatus.BAD_REQUEST, true);
  }

  req._user = user;
  next();
});

export default router;

//--------------------------------------------------------------------------------------------
// SUB-ROUTINES IF NEEDED
//--------------------------------------------------------------------------------------------