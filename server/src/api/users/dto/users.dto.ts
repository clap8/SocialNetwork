import Joi from 'joi';
//--------------------------------------------------------------------------------------------
import { APIError, APICodes, HttpStatus } from '@api/common/utils/api-error';
//--------------------------------------------------------------------------------------------

export const usernameSchema = Joi.string().alphanum().min(2).max(30);
export const passwordSchema = Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/);
export const emailSchema = Joi.string().email();
export const birthYearSchema = Joi.number().integer().min(1900).max(2013);
export const sexSchema = Joi.string().valid(['M', 'F', 'MALE', 'FEMALE']).uppercase();

//
// CREATE USER DTO
//
export class CreateUserDto {
  firstName;
  lastName;
  username;
  password;
  email;
  birthYear;
  sex;
  roles;

  constructor(fields) {
    let schema = Joi.object().keys({
      firstName: Joi.string(),
      lastName: Joi.string(),
      password: passwordSchema.required(),
      username: usernameSchema.required(),
      email: emailSchema.required(),
      birthYear: birthYearSchema,
      sex: sexSchema,
      roles: Joi.string()
    }).required();

    let error = Joi.validate(fields, schema).error;
    if (error) throw new APIError('Failed to create user', APICodes.INVALID_DATA_FORM, HttpStatus.BAD_REQUEST, true, error);

    this.firstName = fields.firstName;
    this.lastName = fields.lastName;
    this.password = fields.password;
    this.username = fields.username;
    this.email = fields.email;
    this.birthYear = fields.birthYear;
    this.sex = fields.sex;
    this.roles = fields.roles;
  }
};

//
// UPDATE USER DTO
//
export class UpdateUserDto {
  firstName;
  lastName;
  username;
  birthYear;
  sex;
  roles;

  constructor(fields) {
    let schema = Joi.object().keys({
      firstName: Joi.string(),
      lastName: Joi.string(),
      username: usernameSchema.required(),
      birthYear: birthYearSchema,
      sex: sexSchema
    }).required();

    let error = Joi.validate(fields, schema).error;
    if (error) throw new APIError('Failed to update user', APICodes.INVALID_DATA_FORM, HttpStatus.BAD_REQUEST, true, error);

    this.firstName = fields.firstName;
    this.lastName = fields.lastName;
    this.username = fields.username;
    this.birthYear = fields.birthYear;
    this.sex = fields.sex;
    this.roles = fields.roles;
  }
};