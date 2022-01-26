import Joi from 'joi';
//--------------------------------------------------------------------------------------------
import { APIError, APICodes, HttpStatus } from '@api/common/utils/api-error';
import { usernameSchema, passwordSchema, emailSchema, birthYearSchema, sexSchema } from './users.dto';
//--------------------------------------------------------------------------------------------

//
// LOGIN DTO
//
export class LoginDto {
  email;
  password;

  constructor(fields) {
    const schema = Joi.object().keys({
      email: emailSchema.required(),
      password: passwordSchema.required()
    }).required();

    let error = Joi.validate(fields, schema).error;
    if (error) throw new APIError('Failed to login', APICodes.INVALID_DATA_FORM, HttpStatus.BAD_REQUEST, true, error);

    this.email = fields.email;
    this.password = fields.password;
  }
};

//
// REGISTER DTO
//
export class RegisterDto {
  firstName;
  lastName;
  username;
  password;
  passwordConfirm;
  email;
  birthYear;
  sex;

  constructor(fields) {
    const schema = Joi.object().keys({
      firstName: Joi.string(),
      lastName: Joi.string(),
      username: usernameSchema.required(),
      password: passwordSchema.required(),
      passwordConfirm: passwordSchema.valid(Joi.ref('password')).required().strict(),
      email: emailSchema.required(),
      birthYear: birthYearSchema.required(),
      sex: sexSchema.required(),
    }).required();

    let error = Joi.validate(fields, schema).error;
    if (error) throw new APIError('Failed to register', APICodes.INVALID_DATA_FORM, HttpStatus.BAD_REQUEST, true, error);

    this.firstName = fields.firstName;
    this.lastName = fields.lastName;
    this.password = fields.password;
    this.passwordConfirm = fields.passwordConfirm;
    this.username = fields.username;
    this.email = fields.email;
    this.birthYear = fields.birthYear;
    this.sex = fields.sex;
  }
};

//
// FORGOT PASSWORD DTO
//
export class ForgotPasswordDto {
  email;

  constructor(fields) {
    const schema = Joi.object().keys({
      email: emailSchema.required()
    }).required();

    let error = Joi.validate(fields, schema).error;
    if (error) throw new APIError('Failed to request forgot password', APICodes.INVALID_DATA_FORM, HttpStatus.BAD_REQUEST, true, error);

    this.email = fields.email;
  }
};