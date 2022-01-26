import Joi from 'joi';
//--------------------------------------------------------------------------------------------
import { APIError, APICodes, HttpStatus } from '@api/common/utils/api-error';
import { usernameSchema, passwordSchema, emailSchema, birthYearSchema, sexSchema } from './users.dto';
//--------------------------------------------------------------------------------------------

//
// CHANGE PASSWORD DTO
//
export class ChangePasswordDto {
  currentPassword;
  newPassword;
  newPasswordConfirm;

  constructor(fields) {
    const schema = Joi.object().keys({
      currentPassword: passwordSchema.required(),
      newPassword: passwordSchema.required(),
      newPasswordConfirm: passwordSchema.valid(Joi.ref('newPassword')).required().strict(),
    }).required();

    let error = Joi.validate(fields, schema).error;
    if (error) throw new APIError('Failed to change password', APICodes.INVALID_DATA_FORM, HttpStatus.BAD_REQUEST, true, error);

    this.currentPassword = fields.currentPassword;
    this.newPassword = fields.newPassword;
    this.newPasswordConfirm = fields.newPasswordConfirm;
  }
};

//
// UPDATE MY PROFILE DTO
//
export class UpdateMyProfileDto {
  firstName;
  lastName;
  username;
  birthYear;
  sex;
  updated;

  constructor(fields) {
    let schema = Joi.object().keys({
      firstName: Joi.string(),
      lastName: Joi.string(),
      username: usernameSchema.required(),
      birthYear: birthYearSchema,
      sex: sexSchema
    }).required();

    let error = Joi.validate(fields, schema).error;
    if (error) throw new APIError('Failed to update profile', APICodes.INVALID_DATA_FORM, HttpStatus.BAD_REQUEST, true, error);

    this.firstName = fields.firstName;
    this.lastName = fields.lastName;
    this.username = fields.username;
    this.birthYear = fields.birthYear;
    this.sex = fields.sex;
    this.updated = Date.now();
  }
};