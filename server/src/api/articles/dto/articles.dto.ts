import Joi from 'joi';
//--------------------------------------------------------------------------------------------
import { APIError, APICodes, HttpStatus } from '@api/common/utils/api-error';
//--------------------------------------------------------------------------------------------

export const titleSchema = Joi.string().min(2).max(30);
export const textSchema = Joi.string();

//
// CREATE ARTICLE DTO
//
export class CreateArticleDto {
  title;
  text;
  imageURL;

  constructor(fields) {
    let schema = Joi.object().keys({
      title: titleSchema.required(),
      text: textSchema.required(),
      imageURL: Joi.string()
    }).required();

    let error = Joi.validate(fields, schema).error;
    if (error) throw new APIError('Failed to create article', APICodes.INVALID_DATA_FORM, HttpStatus.BAD_REQUEST, true, error);

    this.title = fields.title;
    this.text = fields.text;
    this.imageURL = fields.imageURL;
  }
};

//
// CREATE ARTICLE DTO
//
export class UpdateArticleDto {
  title;
  text;
  imageURL;
  updated;

  constructor(fields) {
    let schema = Joi.object().keys({
      title: titleSchema.required(),
      text: textSchema.required(),
      imageURL: Joi.string()
    }).required();

    let error = Joi.validate(fields, schema).error;
    if (error) throw new APIError('Failed to update article', APICodes.INVALID_DATA_FORM, HttpStatus.BAD_REQUEST, true, error);

    this.title = fields.title;
    this.text = fields.text;
    this.imageURL = fields.imageURL;
    this.updated = Date.now();
  }
};