import ExtendableError from '@lib/errors/extendable-error';
//--------------------------------------------------------------------------------------------
import { APIError, APICodes, HttpStatus } from '../utils/api-error';
//--------------------------------------------------------------------------------------------

//
// ERROR HANDLER
//
export default function errorHandler(err, req, res, next) {
  if (err instanceof ExtendableError) {
    res.status(err.status).send(err);
  }
  else {
    err = tryConvert(err);
    if (err instanceof ExtendableError) {
      res.status(err.status).send(err);
    }
    else {
      res.status(500).send('Something wrong !');
    }
  }

  console.log(err);
};

//
// TRY TO CONVERT UNKNWON ERROR TO USABLE ERROR
//
function tryConvert(error) {
  if (error.name === 'MongoError' && error.code === 11000) {
    error = new APIError('Duplicate key error', APICodes.DUPLICATE_KEY, HttpStatus.BAD_REQUEST, true);
  }

  return error;
};